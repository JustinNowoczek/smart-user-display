import { CATEGORIES } from '@/constants'
import FilterRow from './FilterRow'
import UserRow from './UserRow'
import { useUsers } from '@hooks/useUsers'

export default function UserTable() {
	const { users } = useUsers()

	return (
		<table>
			<thead>
				<FilterRow />
				<tr>
					{CATEGORIES.map((category) => (
						<th key={category}>{category}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<UserRow key={user.id} {...user} />
				))}
			</tbody>
		</table>
	)
}

