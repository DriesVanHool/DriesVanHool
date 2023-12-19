import {useQuery, UseQueryResult} from '@tanstack/react-query'
import supabaseClient from './utils/supabaseClient.ts'
import {ICustomer} from '../models/ICustomer.ts'

export const useGetCustomers = (): UseQueryResult<ICustomer[], Error> => {
    return useQuery({
        queryKey: ['customers'],
        queryFn: () => getCustomers(),
    })
}

//QUERIES

const getCustomers = async (): Promise<ICustomer[]> => {
    const query = supabaseClient
        .from('customers')
        .select(`*`)

    const {data, error} = await query

    if (error) {
        throw error
    }

    return data
}