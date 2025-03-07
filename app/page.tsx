'use client'

import { supabase } from '../lib/supabaseClient'
import { useState,useEffect } from 'react'

type Fighter = {
  id: number
  name: string
  winrate: number
  created_at: string // ou Date, mais en général Supabase retourne un string ISO
}

export default function Example() {
  const [data, setData] = useState<Fighter[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('TierList') // remplace par ta table
        .select('*')
      if (error) {
        console.error('Erreur:', error)
      } else {
        setData(data)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>List Fighter</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}