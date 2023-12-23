import {useQuery, UseQueryResult} from '@tanstack/react-query'
import supabaseClient from './utils/supabaseClient.ts'
import {ICategory} from '../models/ICategory.ts'
import {ITag} from '../models/ITag.ts'

export const useGetCategories = (): UseQueryResult<ICategory[], Error> => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => getCategories(),
    })
}

export const useGetTags = (): UseQueryResult<ITag[], Error> => {
    return useQuery({
        queryKey: ['tags'],
        queryFn: () => getTags(),
    })
}


//QUERIES

const getCategories = async (): Promise<ICategory[]> => {
    const query = supabaseClient
        .from('categories')
        .select('*')

    const {data, error} = await query

    if (error) {
        throw error
    }

    return data
}

const getTags = async (): Promise<ITag[]> => {
    const query = supabaseClient
        .from('tags')
        .select('*')

    const {data, error} = await query

    if (error) {
        throw error
    }

    return data
}