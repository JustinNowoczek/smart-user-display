import { CATEGORIES } from '@/constants'

export default function FilterRow() {
	return (
		<tr>
			{CATEGORIES.map(() => (
				<td>
					<input type="text" />
				</td>
			))}
		</tr>
	)
}

