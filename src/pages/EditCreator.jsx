import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { supabase } from '../client'

function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageurl: ''
  })

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single()
      setCreator(data)
    }
    fetchCreator()
  }, [id])

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value })
  }

  const handleUpdate = async () => {
    await supabase.from('creators').update(creator).eq('id', id)
    navigate(`/creator/${id}`)
  }

  const handleDelete = async () => {
    await supabase.from('creators').delete().eq('id', id)
    navigate('/')
  }

  return (
    <main className="container">
      <Link to="/">← Back to Home</Link>
      <article>
        <h1>Edit Creator</h1>
        <label>Name
          <input name="name" value={creator.name || ''} onChange={handleChange} placeholder="Creator's name" />
        </label>
        <label>URL
          <input name="url" value={creator.url || ''} onChange={handleChange} placeholder="Channel or page URL" />
        </label>
        <label>Description
          <textarea name="description" value={creator.description || ''} onChange={handleChange} placeholder="What kind of content do they make?" />
        </label>
        <label>Image URL (optional)
          <input name="imageurl" value={creator.imageurl || ''} onChange={handleChange} placeholder="Link to an image" />
        </label>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={handleUpdate}>Save Changes</button>
          <button className="secondary" onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>Delete Creator</button>
        </div>
      </article>
    </main>
  )
}

export default EditCreator