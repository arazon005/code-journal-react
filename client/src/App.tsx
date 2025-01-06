import { Route, Routes } from 'react-router-dom'
import "./layout.css"
import "./reset.css"
import "./styles.css"
import { NavBar } from './components/NavBar'
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
      </Route>
    </Routes>
  )
}

export default App
