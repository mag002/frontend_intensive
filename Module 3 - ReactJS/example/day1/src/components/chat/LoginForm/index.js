import { useState } from "react"
import { LoginContainer, LoginBox, Title, Input, Button } from "./LoginForm.styles";
function LoginForm({ onLogin }) {
    // const [loginFormValue, setLoginFormValue]=useState({
    //     userName:'',
    //     password:''
    // })
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        if (username && password) {
            onLogin();
        } else {
            alert("INVALID!")
        }
    }
    return <LoginContainer>
        <LoginBox>
            <Title>
                Login
            </Title>
            <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleSubmit}>Login</Button>
        </LoginBox>
    </LoginContainer>
    // <div className="login-container">
    //     <div className="login-box">
    //         <h2>Login</h2>
    //         <input
    //             type="text"
    //             placeholder="Username"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //             className="login-input"
    //         />
    //         <input
    //             type="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             className="login-input"
    //         />
    //         <button onClick={handleSubmit} className="login-button">Login</button>
    //     </div>
    // </div>
}
export default LoginForm