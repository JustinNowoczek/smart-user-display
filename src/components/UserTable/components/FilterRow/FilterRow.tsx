import { CATEGORIES } from '@/constants'
import { useUsers } from '@hooks/useUsers'

export default function FilterRow() {
	const { categoryFilters, dispatchNewCategoryFilter } = useUsers()

	return (
		<tr className="filterRow">
			{CATEGORIES.map((category) => (
				<td key={category}>
					<input
						onDoubleClick={() => {
							dispatchNewCategoryFilter(category, '')
						}}
						value={categoryFilters[category]}
						onChange={({ currentTarget }) => {
							dispatchNewCategoryFilter(category, currentTarget.value)
						}}
						placeholder={`Filter by ${category}`}
						type="text"
					/>
				</td>
			))}
		</tr>
	)
}

