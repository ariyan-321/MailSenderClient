import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MailForm from './components/MailForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MailForm></MailForm>
    </>
  )
}

export default App
