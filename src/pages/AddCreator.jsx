import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../client'

function AddCreator() {
  const navigate = useNavigate()
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageurl: ''
  })

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    const { error } = await supabase.from('creators').insert([creator])
    if (error) {
      console.log('Error:', error)
    } else {
      navigate('/')
    }
  }

  return (
    <main className="container">
      <Link to="/">← Back to Home</Link>
      <article>
        <h1>Add a Creator</h1>
        <label>Name
          <input name="name" value={creator.name} onChange={handleChange} placeholder="Creator's name" />
        </label>
        <label>URL
          <input name="url" value={creator.url} onChange={handleChange} placeholder="Channel or page URL" />
        </label>
        <label>Description
          <textarea name="description" value={creator.description} onChange={handleChange} placeholder="What kind of content do they make?" />
        </label>
        <label>Image URL (optional)
          <input name="imageurl" value={creator.imageurl} onChange={handleChange} placeholder="Link to an image" />
        </label>
        <button onClick={handleSubmit}>Add Creator</button>
      </article>
    </main>
  )
}

export default AddCreator