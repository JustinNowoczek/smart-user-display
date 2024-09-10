import './styles/reset.css'
import './styles/global.css'

import { useEffect } from 'react'
import { useUsers } from '@hooks/useUsers'

function App() {
	const { initializeUsers } = useUsers()

	useEffect(() => {
		initializeUsers()
	}, [initializeUsers])

	return <></>
}

export default App

