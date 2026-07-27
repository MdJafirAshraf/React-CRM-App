import { useState } from "react"

function CounterFn(props) {

    const [count, setCnt] = useState(props.init);

    function decreaseCounter() {
        if (count == 0) {
            alert('Its done...')
        } else {
            setCnt(count - 1)
        }
        
    }

    return (
        <>
        <div style={{padding: '20px'}}>
            <span>Count: {count}</span>< br/>
            <button onClick={() => setCnt(count + 1)} >+</button>
            <button onClick={decreaseCounter} >-</button>
            <button onClick={() => setCnt(props.init)} >Reset</button>
        </div>
        </>
    )
}

export default CounterFn