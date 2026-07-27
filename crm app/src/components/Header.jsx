import { useState } from "react";

function HeaderFn(props) {

    const [myname, setName] = useState("Jafir");

    function sayname() {
        console.log("clicked");
        
        // schedules a re-render with the new value
        setName("Mohamed Jafir Ashraf");
        alert(`your name is ${myname}`);
    }

    return (
        <>
            <h1>CRM Application</h1>
            <h3>Welcome, {props.name}</h3>
            <button onClick={sayname}>
                Say my full name
            </button>
        </>
    )
}

export default HeaderFn