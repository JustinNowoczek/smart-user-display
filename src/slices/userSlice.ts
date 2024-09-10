import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { UserType } from '@custom-types/userTypes'

interface UserState {
	users: UserType[]
}

const initialState: UserState = {
	users: [],
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

