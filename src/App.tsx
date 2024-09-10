import './styles/reset.css'
import './styles/global.css'

import UserTable from '@components/UserTable/UserTable'
import { useEffect } from 'react'
import { useUsers } from '@hooks/useUsers'

function App() {
	const { dispatchInitializeUsers } = useUsers()

	useEffect(() => {
		dispatchInitializeUsers()
	}, [dispatchInitializeUsers])

	return <UserTable />
}

export default App

