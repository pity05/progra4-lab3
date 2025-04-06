// Home.jsx
import WelcomeWidget from "./WelcomeWidget";
 
export default function Home(props) {
    return (
        <>
            <h1>You're at Home!</h1>
            <WelcomeWidget email={props.email} />
        </>
    );
}
