import { useRef, useState } from 'react'
import './App.css'

function App() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')

  const handleLogin = () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value
    
    if (email === "admin@una.cr" && password === "1234") {
      alert("Bienvenido")
    } else {
      setError('Usuario o contraseña incorrecta')
    }
  }

  return (
    <>
      <h2>Login</h2>
      <input
        type="email"
        placeholder='Correo'
        ref={emailRef}
      />
      <br />
      <input 
        type="password"
        placeholder='Contraseña'
        ref={passwordRef}
      />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Iniciar sesión</button>
      
    </>
  )
}

export default App