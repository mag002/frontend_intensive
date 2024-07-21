import { useState } from 'react';

function DarkModeApp() {
    return <h1>This is application wiht darkmode</h1>
}

function LigtModeApp() {
    return <h1>This is application wiht lightmode!!!!</h1>

}
function State() {
    // State
    // const [name, setName] = useState("")
    const [darkMode, setDarkMode] = useState(false)
    // const [count, setCount] = useState(0);
    // const handleOnClick = () => {
    //     // setDarkMode(true);
    //     console.log(count)
    //     setCount(count + 1)
    // }
    // const handleDecrease = () => {
    //     setCount(count - 1)
    // }
    const handleOnClick = () => {
        setDarkMode(!darkMode)
    }
    return <div>
        <h1>Darkmode: {darkMode ? 'ON' : 'OFF'}</h1>
        <button onClick={handleOnClick}>Switch mode</button>
        {/* <h1>Count: {count}</h1>
        <button onClick={handleOnClick}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button> */}
        {
            darkMode ? <DarkModeApp /> : <LigtModeApp />
        }
    </div>
}
export default State;
// functional component
// Hook - useState

// Props&State change => Component will be re-rendered


// Step 1: state: isLoggedIn ? <UserList> : <LoginForm/>
// isLoggedIn is a state of App.js


<form>
    <input>username: </input>
    <input>password: </input>
    <input type="submit"> Login!</input>
</form>

// Step 2: Handle logic by submit form /
// pass setIsLoggedIn method to <LoginForm/> and use it on submit event

// Conditional Rendering
// State
// Pass props