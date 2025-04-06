
// App.jsx
import './App.css'
import Home from './Components/Home'
import Login from './Components/login'
import { useContext } from 'react'
import { AuthContext } from './Components/AuthContext';

function App() {
    const { user } = useContext(AuthContext);
    
    return (
        <>
            <h2>Login</h2>
            <div>
                {!user ? <Login/> : <Home email={user.email} />}
            </div>
        </>
    )
}

export default App
