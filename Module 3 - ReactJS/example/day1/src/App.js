import { useState } from 'react';
import './App.css';
import Timer from './components/examples/Timer';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLogin = () => {
  //   // Call API
  //   // ... 
  //   // Success
  //   setIsLoggedIn(true);
  // }
  const [timers, setTimers] = useState([]);

  const handleAddTimer = () => {
    const newTimers = [...timers];
    newTimers.push({
      key: Date.now()
    })
    setTimers(newTimers)
  }
  const handleDeleteTimer = (key) => {
    const newTimers = [...timers].filter(timer => timer.key !== key);
    setTimers(newTimers)
  }

  return (
    <div className="App">
      {/* CHAT */}
      {/* {
        true ? <UserList /> : <LoginForm onLogin={handleLogin} />
      } */}
      {/* <TodoList /> */}

      <button onClick={handleAddTimer}>Add timer</button>
      {
        timers.map(({ key }) => <Timer key={key} createdAt={key} handleDeleteTimer={handleDeleteTimer} />)
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
