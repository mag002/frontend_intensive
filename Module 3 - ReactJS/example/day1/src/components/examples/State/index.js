import { useState } from 'react';
import styles from './State.module.css'
import styled from 'styled-components'
import { Button } from '../../chat/LoginForm/LoginForm.styles';
const StyledHeadingContainer = styled.div`
    border: 1px solid white;
    & > h1 {
        text-decoration: underline;
        text-transform: ${props => props.capitalize ? 'capitalize' : 'initial'}
    }
`
function TestComponent({ className }) {
    return <div className={className}>
        TEST COMPONENT
    </div>
}
// Higher order component
const StyledTestComponent = styled(TestComponent)` // generate a css className // Pass that class name as a props to the component
  color: #BF4F74;
  font-weight: bold;
`;



function DarkModeApp() {
    return <StyledHeadingContainer capitalize>
        <h1>This is application wiht darkmode</h1>
        <StyledTestComponent></StyledTestComponent>
    </StyledHeadingContainer>
}

function LigtModeApp() {
    return <StyledHeadingContainer >
        <h1>This is application wiht LIGHT</h1>
    </StyledHeadingContainer>

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
    // const style = darkMode ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }
    return <div className={darkMode ? styles.darkBg : styles.whiteBg}>
        <StyledTestComponent />
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