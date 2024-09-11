import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { CATEGORIES } from '@/constants'
import { UserType } from '@custom-types/userTypes'
import fetchAllUsers from '@/api/user'

interface UserState {
	users: UserType[]
	displayUsers: UserType[]
	categoryFilters: {
		[key in (typeof CATEGORIES)[number]]: string
	}
	status: 'loading' | 'succeeded' | 'failed'
}

const initialState: UserState = {
	users: [],
	displayUsers: [],
	categoryFilters: Object.fromEntries(
		CATEGORIES.map((category) => [category, ''])
	) as UserState['categoryFilters'],
	status: 'loading',
}

export const initializeUsers = createAsyncThunk('user/initializeUsers', async () => {
	return await fetchAllUsers()
})

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCategoryFilter(
			state,
			{ payload }: PayloadAction<{ category: keyof UserState['categoryFilters']; newValue: string }>
		) {
			if (state.categoryFilters[payload.category] !== payload.newValue) {
				state.categoryFilters[payload.category] = payload.newValue

				state.displayUsers = state.users.filter((user) =>
					Object.entries(user).every(
						([category, value]) =>
							typeof value === 'number' ||
							value
								.toLowerCase()
								.includes(
									state.categoryFilters[
										category as keyof UserState['categoryFilters']
									].toLowerCase()
								)
					)
				)
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(initializeUsers.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(initializeUsers.fulfilled, (state, action: PayloadAction<UserType[]>) => {
				state.status = 'succeeded'
				state.users = action.payload
				state.displayUsers = action.payload
			})
			.addCase(initializeUsers.rejected, (state) => {
				state.status = 'failed'
			})
	},
})

export const { setCategoryFilter } = userSlice.actions
export default userSlice.reducer

