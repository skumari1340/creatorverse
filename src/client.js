import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://wqbvfczrwryzdujseaym.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxYnZmY3pyd3J5emR1anNlYXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3NDM5NTAsImV4cCI6MjA5MzMxOTk1MH0.ZJ-Sdy3SixbmMdxAqL0l0svQEdJMTNSbSYqjT_HyiMc'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)


