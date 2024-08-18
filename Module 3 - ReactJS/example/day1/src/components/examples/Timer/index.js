import { useEffect, useRef, useState } from "react"

function Timer({ createdAt, timers, handleDeleteTimer }) {
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(true);

    const [isLoading, setIsLoading] = useState(true);
    const [todos, setTodods] = useState([])
    //
    // setInterval
    //
    //interval A [running:true, setCount]
    // toggle runing
    // interval A clear
    // create Interval B [running: false]
    // toggle running
    // clear Interval B
    // create interval C [running: true, setCount]
    useEffect(() => {
        console.log("EFFECT RUN")
        const interval = setInterval(() => {
            setCount((count) => {
                if (running) {
                    return count + 1
                } else {
                    return count
                }
            })
        }, 1000)
        return () => {
            console.log("UNMOUNT EFFECT")
            clearInterval(interval)
        }
    }, [running]) // will unmount


    // Level 1: call API to get the list (componentDidMount)
    // Add spinner when call API 
    // useEffect(()=>{},[])
    // json-server|mock-json
    // read update delete create => call api

    // Level 2: useEffect(with depedencies) - depends on a flag -> when flag change -> Recall API / Refresh API

    // undefined - depends all
    // specific (count) - depends on 'count' state and only run when the re-render trigger by count
    // [] empty array - depends on nothing => only run 1 time (componentDidMount)
    const timeObject = new Date(createdAt);
    const time = `${timeObject.getHours()}:${timeObject.getMinutes()}:${timeObject.getSeconds()}`
    return <div style={{ display: 'flex' }}>
        <h1>{time} -  {count}s </h1>
        {/* <button onClick={() => { console.log(refCount.current); refCount.current++ }}>Pause</button> */}
        <button onClick={() => { setRunning(!running); console.log('count', count) }} >Pause</button>
        <button onClick={() => handleDeleteTimer(createdAt)}>Delete</button>
    </div>

}
export default Timer