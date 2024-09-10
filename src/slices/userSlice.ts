import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CATEGORIES } from '@/constants'
import { UserType } from '@custom-types/userTypes'

interface UserState {
	users: UserType[]
	displayUsers: UserType[]
	categoryFilters: {
		[key in (typeof CATEGORIES)[number]]: string
	}
}

const initialState: UserState = {
	users: [],
	displayUsers: [],
	categoryFilters: Object.fromEntries(
		CATEGORIES.map((category) => [category, ''])
	) as UserState['categoryFilters'],
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUsers(state, { payload }: PayloadAction<UserType[]>) {
			state.users = payload
			state.displayUsers = payload
		},
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
})

export const { setUsers, setCategoryFilter } = userSlice.actions
export default userSlice.reducer

