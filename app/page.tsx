'use client'

import { supabase } from '../lib/supabaseClient'
import { useState,useEffect } from 'react'

type Fighter = {
  id: number
  name: string
  winrate: number
  created_at: string // ou Date, mais en général Supabase retourne un string ISO
}

export default function Page() {
  const [fighters, setFighters] = useState<Fighter[]>([])

  useEffect(() => {
      const fetchFighters = async () => {
          const { data, error } = await supabase
              .from('fighters')
              .select('*')

          if (error) {
              console.error('Erreur lors de la récupération:', error.message)
          } else {
              setFighters(data as Fighter[])
          }
      }

      fetchFighters()
  }, [])

  return (
    <div>
        <h1>Liste des Fighters</h1>
        <ul>
            {fighters.map(fighter => (
                <li key={fighter.id}>
                    {fighter.name} - Winrate: {fighter.winrate}%
                </li>
            ))}
        </ul>
    </div>
)
}