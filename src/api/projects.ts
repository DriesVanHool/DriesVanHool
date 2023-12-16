import {IProject} from '../models/IProject.ts'
import supabaseClient from './utils/supabaseClient.ts'
import {useQuery, UseQueryResult} from '@tanstack/react-query'


export const useGetProjects = (): UseQueryResult<IProject[], Error> => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: () => getProjects(),
    })
}

export const useGetProjectByTitle = (name: string | null): UseQueryResult<IProject, Error> => {
    return useQuery({
        queryKey: ['projects', name],
        queryFn: () => getPostByTitle({name}),
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

interface GetProjectByTitleParams {
    name: string | null
}


const getPostByTitle= async ({name}: GetProjectByTitleParams): Promise<IProject> => {
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
                name
              )
            )
        `)
        .eq('name', name)
        .single()

    if (error) {
        throw error
    }

    return data
}