import { useEffect, useState } from 'react'
import { supabase } from '../client'
import { Link } from 'react-router-dom'

function ShowCreators() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select('*')
      setCreators(data || [])
    }
    fetchCreators()
  }, [])

  return (
    <main className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>🌟 Creatorverse</h1>
        <Link to="/add"><button>Add New Creator</button></Link>
      </div>
      {creators.length === 0 ? (
        <p>No creators yet! Add some.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {creators.map(creator => (
            <article key={creator.id}>
              {creator.imageurl && (
                <img src={creator.imageurl} alt={creator.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
              )}
              <h2>{creator.name}</h2>
              <p>{creator.description}</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={creator.url} target="_blank" role="button">Visit Channel</a>
                <Link to={`/creator/${creator.id}`}><button>View</button></Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}

export default ShowCreators