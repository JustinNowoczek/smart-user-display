import FilterRow from './FilterRow'
import UserRow from './UserRow'
import { useUsers } from '@hooks/useUsers'

export default function UserTable() {
	const { users } = useUsers()

	const headers = ['Name', 'Username', 'Email', 'Phone']

	return (
		<table>
			<thead>
				<FilterRow />
				<tr>
					{headers.map((header) => (
						<th key={header}>{header}</th>
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

