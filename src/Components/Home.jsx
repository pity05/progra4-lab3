// Home.jsx
import { useContext } from "react";
import WelcomeWidget from "./WelcomeWidget";
import { AuthContext } from "./AuthContext";
 
export default function Home() {

    const { logout} = useContext (AuthContext)
    return (
        <>
            <h1>You're at Home!</h1>
            <WelcomeWidget/>
            <button onClick={logout}>Logout</button>
        </>
    );
}
 