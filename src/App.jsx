import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormikContainer from './components/FormikContainer'
import LoginForm from './components/LoginForm'
import Registration from './components/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {/* <FormikContainer/> */}
    {/* <LoginForm/> */}
    <Registration/>
    </div>
  )
}

export default App
