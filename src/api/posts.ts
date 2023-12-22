import {useQuery, UseQueryResult} from '@tanstack/react-query'
import supabaseClient from './utils/supabaseClient.ts'
import {IPost} from '../models/IPost.ts'

export const useGetPosts = (): UseQueryResult<IPost[], Error> => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => getPosts(),
    })
}

export const useGetPostsBySlug = (slug: string | null): UseQueryResult<IPost, Error> => {
    return useQuery({
        queryKey: ['posts', slug],
        queryFn: () => getPostBySlug({slug}),
    })
}

//QUERIES

const getPosts = async (): Promise<IPost[]> => {
    const query = supabaseClient
        .from('posts')
        .select(`
            *,
            category: category_id(
                id,
                name
            ),
            tags: posts_tags(
              tag: tag_id(
                id,
                name,
                color
              )
            )
        `)

    const {data, error} = await query

    if (error) {
        throw error
    }

    return data
}

interface GetPostBySlugParams {
    slug: string | null
}

const getPostBySlug = async ({slug}: GetPostBySlugParams): Promise<IPost> => {
    const {error, data}  = await supabaseClient
        .from('posts')
        .select(`
            *,
            category: category_id(
                id,
                name
            ),
            tags: posts_tags(
              tag: tag_id(
                id,
                name,
                color
              )
            )
        `)
        .eq('slug', slug)
        .single()

    if (error) {
        throw error
    }

    return data
}