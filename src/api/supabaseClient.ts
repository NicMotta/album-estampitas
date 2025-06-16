import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xugzdunpluthnhpcngpg.supabase.co'
const supabaseKey = 'mikey'
export const supabase = createClient(supabaseUrl, supabaseKey)