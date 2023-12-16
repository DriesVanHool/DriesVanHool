import {ITag} from './ITag.ts'
import {ICustomer} from './ICustomer.ts'
import {IProject} from './IProject.ts'
import {ICategory} from './ICategory.ts'
import {IProjectTag} from './IProjectTag.ts'

export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface IDatabase {
    public: {
        Tables: {
            projects: {
                Row: IProject
                Insert: {
                    id?: number
                    name: string
                    description?: string | null
                    url?: string | null
                    image?: string | null
                    from?: string | null
                    to?: string | null
                    category_id?: number | null
                    customer_id?: number | null
                }
                Update: {
                    id?: number
                    name: string
                    description?: string | null
                    url?: string | null
                    image?: string | null
                    from?: string | null
                    to?: string | null
                    category_id?: number | null
                    customer_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: 'projects_category_id_fkey'
                        columns: ['category_id']
                        referencedRelation: 'categories'
                        referencedColumns: ['id']
                    },
                    {
                        foreignKeyName: 'projects_customer_id_fkey'
                        columns: ['customer_id']
                        referencedRelation: 'customers'
                        referencedColumns: ['id']
                    }
                ]
            }
            posts: {
                Row: {
                    id: number
                    title: string
                    summary: string | null
                    text: string | null
                    slug: string
                    category_id: number | null
                    createdAt: string | null
                    updated_at: string | null
                    medium: string | null
                    linkedin: string | null
                    youtube: string | null
                }
                Insert: {
                    id: number
                    title: string
                    summary?: string | null
                    text?: string | null
                    slug: string
                    category_id?: number | null
                    updated_at?: string | null
                    medium?: string | null
                    linkedin?: string | null
                    youtube?: string | null
                }
                Update: {
                    id: number
                    title: string
                    summary?: string | null
                    text?: string | null
                    slug: string
                    category_id?: number | null
                    updated_at?: string | null
                    medium?: string | null
                    linkedin?: string | null
                    youtube?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: 'posts_category_id_fkey'
                        columns: ['category_id']
                        referencedRelation: 'categories'
                        referencedColumns: ['id']
                    },
                ]
            }
            categories: {
                Row: ICategory
                Insert: {
                    id: number
                    name: string
                }
                Update: {
                    id: number
                    name: string
                }
                Relationships: []
            }
            customers: {
                Row: ICustomer
                Insert: {
                    id: number
                    name: string
                    logo?: string | null
                }
                Update: {
                    id: number
                    name: string
                    logo?: string | null
                }
                Relationships: []
            }
            tags: {
                Row: ITag
                Insert: {
                    id: number
                    name: string
                }
                Update: {
                    id: number
                    name: string
                }
                Relationships: []
            }
            projects_tags: {
                Row: IProjectTag
                Insert: {
                    project_id: number
                    tag_id: number
                }
                Update: {
                    project_id: number
                    tag_id: number
                }
                Relationships: [
                    {
                        foreignKeyName: 'projects_tags_project_id_fkey'
                        columns: ['project_id']
                        referencedRelation: 'projects'
                        referencedColumns: ['id']
                    },
                    {
                        foreignKeyName: 'projects_tags_tag_id_fkey'
                        columns: ['tag_id']
                        referencedRelation: 'tags'
                        referencedColumns: ['id']
                    },
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
