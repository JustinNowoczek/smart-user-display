import { CATEGORIES } from '@/constants'
import { UserType } from '@custom-types/userTypes'

export default async function fetchAllUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')

	if (!response.ok) {
		throw new Error('network response failed')
	}

	const users = (await response.json()) as UserType[]

	return users.map((user) => {
		const newUser = { id: user.id } as UserType

		CATEGORIES.forEach((category) => {
			if (user[category] === undefined) {
				console.warn('Users do not have the property: ' + category)
			} else {
				newUser[category] = user[category]
			}
		})

		return newUser
	})
}

