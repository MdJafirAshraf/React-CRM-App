function Usercard({name, age}) {
    return (
        <>
            <div style={{ border: "2px solid", padding: "10px" }}>
                <label>Name: <span>{name}</span></label>
                <label style={{ marginLeft: "10px" }}>Age: <span>{age}</span></label>
            </div>
        </>
    )
}

export default Usercard