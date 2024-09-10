import { CATEGORYTITLES } from '@/constants'

export default function FilterRow() {
	return (
		<tr>
			{CATEGORYTITLES.map((category) => (
				<td key={category}>
					<input type="text" />
				</td>
			))}
		</tr>
	)
}

