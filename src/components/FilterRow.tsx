export default function FilterRow() {
	return (
		<tr>
			{new Array(4).fill('').map(() => (
				<td>
					<input type="text" />
				</td>
			))}
		</tr>
	)
}

