function Usercard({name, age}) {

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