import {IProject} from '../models/IProject.ts'
import supabaseClient from './utils/supabaseClient.ts'
import {useQuery, UseQueryResult} from '@tanstack/react-query'


export const useGetProjects = (): UseQueryResult<IProject[], Error> => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: () => getProjects(),
    })
}

export const useGetProjectBySlug = (slug: string | null): UseQueryResult<IProject, Error> => {
    return useQuery({
        queryKey: ['projects', slug],
        queryFn: () => getPostBySlug({slug}),
    })
}

//QUERIES

const getProjects = async (): Promise<IProject[]> => {
    const query = supabaseClient
        .from('projects')
        .select(`
            *,
            category: category_id(
                id,
                name
            ),
            customer: customer_id(
                id,
                name,
                logo
            ),
            tags: projects_tags(
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

interface GetProjectByTitleParams {
    slug: string | null
}


const getPostBySlug= async ({slug}: GetProjectByTitleParams): Promise<IProject> => {
    const {error, data}  = await supabaseClient
        .from('projects')
        .select(`
            *,
            category: category_id(
                id,
                name
            ),
            customer: customer_id(
                id,
                name,
                logo
            ),
            tags: projects_tags(
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