import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useUserState } from '../Hooks/useUserState';

export default function Login() {

    const {setUser} = useContext(AuthContext);
    

    const {emailRef,passwordRef,error,login,setError} = useUserState();
    
    const handleLogin = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const isSuccess = login(email, password);
        
        if(!isSuccess) {
            setError("Credenciales incorrectas");
        } else {
           console.log ("set User State")
           setUser({email})
        }
    }

    return (
        <div>
          <input 
            type="email"
            placeholder='Correo'
            ref={emailRef}
          />
          <br/>
          <input
            type="password"
            placeholder='Contraseña'
            ref={passwordRef}
          />
          <br/>
          <button onClick={handleLogin}>Ingresar</button>
          { error && <p style={{ color: "red" }}>{error}</p> }
        </div>
    )
}