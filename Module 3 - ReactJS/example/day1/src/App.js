import { useState } from 'react';
import './App.css';
import UserCard from './components/chat/UserCard';
import State from './components/examples/State';
import UserList from './components/chat/UserList';
import LoginForm from './components/chat/LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    // Call API
    // ... 
    // Success
    setIsLoggedIn(true);
  }
  return (
    <div className="App">
      {/* CHAT */}
      {
        isLoggedIn ? <UserList /> : <LoginForm onLogin={handleLogin} />
      }
    </div>
  );
}
// JSX - Javascript XML

// - With import, when go to a folder path, it will automatically read an index.js file
// - A js file with 'export default [something]
// => You just need to name it when import


//

// - A JS file with multiple export, we need to destructuring and
// select the thing we want to import
// - We can import all from multiple export as an Object by using '* as yourVariableName'
export default App;
