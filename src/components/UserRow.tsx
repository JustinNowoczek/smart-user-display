import { UserType } from '@custom-types/userTypes'

export default function UserRow({ email, name, phone, username }: UserType) {
	return (
		<tr>
			<td>{name}</td>
			<td>{username}</td>
			<td>{email}</td>
			<td>{phone}</td>
		</tr>
	)
}

