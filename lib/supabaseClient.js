import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://czcsnpgnumfeyxpfmkqu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6Y3NucGdudW1mZXl4cGZta3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMzY4NzEsImV4cCI6MjA1NjkxMjg3MX0.4pXYcOn2VqPLwqNd6KNArcBu0CGU9Z-ZEe1EYaDkSIk'

export const supabase = createClient(supabaseUrl, supabaseKey)