export const CATEGORIES = ['name', 'username', 'email', 'phone', 'website'] as const
export const CATEGORYTITLES = CATEGORIES.map(
	(category) => category.slice(0, 1).toUpperCase() + category.slice(1)
)

