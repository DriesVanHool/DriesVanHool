import {ICategory} from './ICategory.ts'
import {IProjectTag} from './IProjectTag.ts'

export interface IPost {
    id: number
    title: string
    summary: string | null
    text: string | null
    slug: string
    category_id: number | null
    category?: ICategory | null
    created_at: string | null
    updated_at: string | null
    medium: string | null
    linkedin: string | null
    youtube: string | null
    url: string | null
    tags?: IProjectTag[]
    image?: string | null
}