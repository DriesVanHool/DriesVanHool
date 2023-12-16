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
    createdAt: string | null
    updated_at: string | null
    medium: string | null
    linkedin: string | null
    youtube: string | null
    tags?: IProjectTag[]
}