import { useUsers } from '@hooks/useUsers'

export default function UserTable() {
	const { users } = useUsers()

	const headers = ['Name', 'Username', 'Email', 'Phone']

	return (
		<table>
			<thead>
				<tr>
					{headers.map((header) => (
						<th key={header}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{users.map(({ email, id, name, phone, username }) => (
					<tr key={id}>
						<td>{name}</td>
						<td>{username}</td>
						<td>{email}</td>
						<td>{phone}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

