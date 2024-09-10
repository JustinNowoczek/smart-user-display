import { CATEGORYTITLES } from '@/constants'
import FilterRow from './FilterRow'
import UserRow from './UserRow'
import { useUsers } from '@hooks/useUsers'

export default function UserTable() {
	const { displayUsers } = useUsers()

	return (
		<table>
			<thead>
				<FilterRow />
				<tr>
					{CATEGORYTITLES.map((category) => (
						<th key={category}>{category}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{displayUsers.map((user) => (
					<UserRow key={user.id} {...user} />
				))}
			</tbody>
		</table>
	)
}

