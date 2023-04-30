import { useState } from 'react'
import reactLogo from './assets/react.svg'
import GlobalStyle from './styles/GlobalStyles'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
