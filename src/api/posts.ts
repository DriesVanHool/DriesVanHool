import {useQuery, UseQueryResult} from '@tanstack/react-query'
import supabaseClient from './utils/supabaseClient.ts'
import {IPost} from '../models/IPost.ts'

export const useGetPosts = (): UseQueryResult<IPost[], Error> => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => getPosts(),
    })
}

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
                name
              )
            )
        `)

    const {data, error} = await query

    if (error) {
        throw error
    }

    return data
}