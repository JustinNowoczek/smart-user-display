import { CATEGORIES } from '@/constants'

export default function FilterRow() {
	return (
		<tr>
			{CATEGORIES.map((category) => (
				<td key={category}>
					<input type="text" />
				</td>
			))}
		</tr>
	)
}

