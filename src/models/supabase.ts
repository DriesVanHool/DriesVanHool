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
                Row: {
                    id: number
                    name: string
                    description: string | null
                    url: string | null
                    image: string | null
                    from: string | null
                    to: string | null
                    createdAt: string | null
                    category_id: number | null
                    customer_id: number | null
                }
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
                Row: {
                    id: number
                    name: string
                }
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
                Row: {
                    id: number
                    name: string
                    logo: string | null
                }
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
                Row: {
                    id: number
                    name: string
                }
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
