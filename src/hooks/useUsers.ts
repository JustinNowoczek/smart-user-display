import { AppDispatch, RootState } from '@/store'
import { initializeUsers, setCategoryFilter } from '@/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

import { CATEGORIES } from '@/constants'
import { useCallback } from 'react'

export const useUsers = () => {
	const dispatch: AppDispatch = useDispatch()
	const usersStore = useSelector((state: RootState) => state.user)

	const dispatchInitializeUsers = useCallback(() => {
		dispatch(initializeUsers())
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
		dispatchInitializeUsers,
	}
}

