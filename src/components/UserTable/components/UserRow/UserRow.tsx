import { CATEGORIES } from '@/constants'
import { UserType } from '@custom-types/userTypes'
import { useUsers } from '@hooks/useUsers'

export default function UserRow(user: UserType) {
	const { categoryFilters } = useUsers()

	return (
		<tr>
			{CATEGORIES.map((category) => {
				const text: string = user[category]
				const filter = categoryFilters[category]

				if (filter) {
					const start = text.toLowerCase().indexOf(filter.toLowerCase())

					return (
						<td key={category}>
							{text.slice(0, start)}
							<span>{text.slice(start, start + filter.length)}</span>
							{text.slice(start + filter.length)}
						</td>
					)
				}

				return <td key={category}>{text}</td>
			})}
		</tr>
	)
}

