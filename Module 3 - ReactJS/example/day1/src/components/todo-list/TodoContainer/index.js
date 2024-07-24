import AddInputContainer from "../AddInputContainer"
import Card from '@mui/material/Card';
import TodoItem from "../TodoItem";

const TodoContainer = () => {
    // state: listTodo=[{id:1, name: 'Clean the room', isDone: true, createdAt: time}]
    //  Step 1: have an array and can add a new item to that array via the AddInputContainer
    //  Step 2: Render the Todo Item depends on listTodoState
    // 

    return <Card raised sx={{ maxWidth: 800, minWidth: 275 }}>
        <AddInputContainer />
        <hr />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />


    </Card>
}

export default TodoContainer