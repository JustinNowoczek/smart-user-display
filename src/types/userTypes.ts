import { CATEGORIES } from '@/constants'

export type UserType = { [key in (typeof CATEGORIES)[number]]: string } & { id: number }

//  {
// 	id: number
// 	name: string
// 	username: string
// 	email: string
// 	phone: string
// }

