import { AppDispatch, RootState } from '@/store'
import { setCategoryFilter, setUsers } from '@/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

import { CATEGORIES } from '@/constants'
import fetchAllUsers from '@/api/user'
import { useCallback } from 'react'

export const useUsers = () => {
	const dispatch: AppDispatch = useDispatch()
	const usersStore = useSelector((state: RootState) => state.user)

	const initializeUsers = useCallback(async () => {
		dispatch(setUsers(await fetchAllUsers()))
	}, [dispatch])

	const dispatchNewCategoryFilter = useCallback(
		(category: (typeof CATEGORIES)[number], newValue: string) => {
			dispatch(setCategoryFilter({ category, newValue }))
		},
		[dispatch]
	)

	return {
		...usersStore,
		dispatchNewCategoryFilter,
		initializeUsers,
	}
}

