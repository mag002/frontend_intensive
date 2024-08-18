import { useState } from 'react';
import './App.css';
import TodoList from './components/todo-list/TodoList';

function App() {
  const [timers, setTimers] = useState([]);
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}
export default App;
