import { useEffect, useState } from "react"

function Effect() {
    const [count, setCount] = useState(0);

    // This use effect only run 1 time when component render (mount)
    useEffect(() => {
        console.log("Mount")
    }, []);// depedencies

    // This use every single time that component re-render (update)
    useEffect(() => {
        console.log("Update")
    });

    // Only run when component removed from the screen (unmount)
    useEffect(() => {
        return () => console.log("REMOVED")
    }, [])


    return <div>

        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
}
export default Effect