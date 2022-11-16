import { useState } from 'react'
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Meme />
    </div>
  )
}

export default App
