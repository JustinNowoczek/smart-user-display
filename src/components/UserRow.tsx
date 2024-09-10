import { CATEGORIES } from '@/constants'
import { UserType } from '@custom-types/userTypes'

export default function UserRow(user: UserType) {
	return (
		<tr>
			{CATEGORIES.map((category) => (
				<td key={category}>{user[category]}</td>
			))}
		</tr>
	)
}

