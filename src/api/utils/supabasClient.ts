import {createClient} from '@supabase/supabase-js'
import {IDatabase} from '../../models/supabase.ts'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabaseClient = createClient<IDatabase>(supabaseUrl, supabaseKey)

export default supabaseClient

