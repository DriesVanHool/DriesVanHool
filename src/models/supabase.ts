import {ITag} from './ITag.ts'
import {ICustomer} from './ICustomer.ts'
import {IProject} from './IProject.ts'
import {ICategory} from './ICategory.ts'
import {IProjectTag} from './IProjectTag.ts'
import {IProjectCreate} from './IProjectCreate.ts'
import {IPost} from './IPost.ts'
import {IPostCreate} from './IPostCreate.ts'

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
                Insert: IProjectCreate
                Update: IProjectCreate
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
                Row: IPost
                Insert: IPostCreate
                Update: IPostCreate
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
                Insert: ICategory
                Update: ICategory
                Relationships: []
            }
            customers: {
                Row: ICustomer
                Insert: ICustomer
                Update: ICustomer
                Relationships: []
            }
            tags: {
                Row: ITag
                Insert: ITag
                Update: ITag
                Relationships: []
            }
            projects_tags: {
                Row: IProjectTag
                Insert: IProjectTag
                Update: IProjectTag
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
