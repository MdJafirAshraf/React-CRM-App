import { useState } from "react";

function Usercard({name, age}) {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    function formSubmit(e) {
        e.preventDefault();
        console.log(userName, userEmail);
    }

    function saveBtn() {
        alert("Save Button")
    }

    function updateBtn() {
        alert("Update Button")
    }

    function deleteBtn() {
        alert("Delete Button")
    }

    return (
        <>
            <div style={{ padding: "10px" }}>
                <form onSubmit={formSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter user name"
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Enter user email"
                        value={userEmail} 
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
                <button onClick={saveBtn}>
                    Save
                </button>
                <button onClick={updateBtn}>
                    Update
                </button>
                <button onClick={deleteBtn}>
                    Delete
                </button>
            </div>
        </>
    )
}

export default Usercard