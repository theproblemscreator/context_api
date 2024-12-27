import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetName from './components/GetName'
import { NameProvider } from './components/NameContext'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Home from './components/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <NameProvider>
     <GetName/>
     <Home/>
     <Contact/>
     <Profile/>
    </NameProvider>
  )
}

export default App
