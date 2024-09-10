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
		setUsers(state, action: PayloadAction<UserType[]>) {
			state.users = action.payload
		},
	},
})

export const { setUsers } = userSlice.actions
export default userSlice.reducer

