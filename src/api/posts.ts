import {useQuery, UseQueryResult} from '@tanstack/react-query'
import supabaseClient from './utils/supabaseClient.ts'
import {IPost} from '../models/IPost.ts'

export const useGetPosts = (): UseQueryResult<IPost[], Error> => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => getPosts(),
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
        `).order('created_at', { ascending: false })

    const {data, error} = await query

    if (error) {
        throw error
    }

    return data
}