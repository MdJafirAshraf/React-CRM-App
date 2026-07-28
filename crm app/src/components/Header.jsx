import { useState } from "react";

function HeaderFn(props) {

    const isAdmin = true;
    const [myname, setName] = useState("Jafir");
    const [isLoggedIn, setLogin] = useState(false);

    function sayname() {
        console.log("clicked");
        
        // schedules a re-render with the new value
        setName("Mohamed Jafir Ashraf");
        alert(`your name is ${myname}`);
    }
    

    return (
        <>
            <h1>CRM Application</h1>
            {
                isLoggedIn
                ? <h3>Welcome, {props.name}</h3>
                : <h3>Please Login</h3>
            }
            {
                isAdmin && 
                <button onClick={sayname}>
                    Say my full name
                </button>
            }
            {
                isAdmin && 
                <button onClick={() => setLogin(!isLoggedIn)}>
                    Change Login
                </button>
            }
            
        </>
    )
}

export default HeaderFn