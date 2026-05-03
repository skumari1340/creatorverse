import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/creator/:id" element={<ViewCreator />} />
        <Route path="/creator/:id/edit" element={<EditCreator />} />
        <Route path="/add" element={<AddCreator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App