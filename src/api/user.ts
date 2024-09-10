import { UserType } from '@custom-types/userTypes'

export default async function fetchAllUsers() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users')

		if (!response.ok) {
			throw new Error('network response failed')
		}

		const users = (await response.json()) as UserType[]

		return users.map(({ id, email, name, phone, username }) => ({
			id,
			email,
			name,
			phone,
			username,
		}))
	} catch {
		console.error('fetching users failed')
		return []
	}
}

