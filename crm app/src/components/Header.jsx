function HeaderFn(props) {

    function sayname(name) {
        console.log("clicked");
        alert(`your name is ${name}`);
    }

    return (
        <>
            <h1>CRM Application</h1>
            <h3>Welcome, {props.name}</h3>
            <button onClick={() => sayname(props.name)}>
                Say my name
            </button>
        </>
    )
}

export default HeaderFn