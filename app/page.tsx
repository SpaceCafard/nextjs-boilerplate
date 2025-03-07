import { supabase } from '../lib/supabaseClient'
import React from 'react'

type fighter = {
  id: number
  name: string
  winrate: number
}

export default function Example() {
  const [data, setData] = React.useState<fighter[]>([])

  React.useEffect(() => {
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