import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'

function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single()
      setCreator(data)
    }
    fetchCreator()
  }, [id])

  if (!creator) return <main className="container"><p>Loading...</p></main>

  return (
    <main className="container">
      <Link to="/">← Back to Home</Link>
      <article>
        {creator.imageurl && (
          <img src={creator.imageurl} alt={creator.name} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
        )}
        <h1>{creator.name}</h1>
        <p>{creator.description}</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href={creator.url} target="_blank" role="button">Visit Channel</a>
          <Link to={`/creator/${id}/edit`}><button className="secondary">Edit Creator</button></Link>
        </div>
      </article>
    </main>
  )
}

export default ViewCreator