import './userTable.css'

import { CATEGORIES, CATEGORYTITLES } from '@/constants'

import FilterRow from './components/FilterRow/FilterRow'
import UserRow from './components/UserRow/UserRow'
import { useUsers } from '@hooks/useUsers'

export default function UserTable() {
	const { displayUsers, dispatchNewCategoryFilter } = useUsers()

	return (
		<table className="userTable">
			<thead>
				<FilterRow />
				<tr>
					{CATEGORYTITLES.map((category) => (
						<th key={category}>{category}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{displayUsers.length ? (
					displayUsers.map((user) => <UserRow key={user.id} {...user} />)
				) : (
					<tr>
						<td
							colSpan={CATEGORIES.length}
							className="noResults"
							onClick={() => {
								CATEGORIES.forEach((category) => {
									dispatchNewCategoryFilter(category, '')
								})
							}}
						>
							0 results. Click here To reset the filter
						</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

