import {ICategory} from './ICategory.ts'
import {ICustomer} from './ICustomer.ts'
import {IProjectTag} from './IProjectTag.ts'

export interface IProject{
    id: number
    name: string
    description: string | null
    url: string | null
    image: string | null
    banner_image: string | null
    slug: string
    thumbnail: string | null
    from: string | null
    to: string | null
    createdAt: string | null
    category_id: number | null
    category?: ICategory | null
    customer_id: number | null
    customer?: ICustomer | null
    tags?: IProjectTag[]
}