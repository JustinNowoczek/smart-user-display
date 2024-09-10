import { AppDispatch, RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'

import fetchAllUsers from '@/api/user'
import { setUsers } from '@/slices/userSlice'
import { useCallback } from 'react'

export const useUsers = () => {
	const dispatch: AppDispatch = useDispatch()
	const usersStore = useSelector((state: RootState) => state.user)

	const initializeUsers = useCallback(async () => {
		dispatch(setUsers(await fetchAllUsers()))
	}, [dispatch])

	return {
		...usersStore,
		initializeUsers,
	}
}

