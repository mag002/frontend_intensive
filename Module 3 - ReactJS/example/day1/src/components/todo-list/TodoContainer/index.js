import AddInputContainer from "../AddInputContainer"
import Card from '@mui/material/Card';
import TodoItem from "../TodoItem";
import { useState } from "react";
import { getCurrentDateWithFormat } from "../../utils";
import { Box, Icon, Input } from "@mui/material";
import styled from "styled-components";
import StyledGridBox from "../StyledGridBox";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const TodoContainer = () => {
    // state: listTodo=[{id:1, name: 'Clean the room', isDone: true, createdAt: time}]
    //  Step 1: have an array and can add a new item to that array via the AddInputContainer
    //  Step 2: Render the Todo Item depends on listTodoState
    // 

    const [todos, setTodos] = useState([])
    const [searchValue, setSearchValue] = useState("");
    const [currentSortTitle, setCurrentSortTitle] = useState("status");
    const [currentSortDirection, setCurrentSortDirection] = useState("asc");
    // when cclick on add button, we get the value from input
    // on parent container that control the state, we have the input from children component

    // add new object to the state depends on children input
    const handleAddTodo = (taskName) => {
        const newTodos = [{
            id: Date.now(),
            name: taskName,
            isDone: false,
            createdAt: getCurrentDateWithFormat()
        }, ...todos];

        setTodos(newTodos)
    }

    const handleUpdateTodo = (todoId) => {
        console.log('todoId', todoId)
        const newTodos = [...todos];
        const updatedTodo = newTodos.find(todo => todo.id === todoId);
        updatedTodo.isDone = !updatedTodo.isDone;
        newTodos.sort((a, b) => { // sort the list to make the done task go to bottom
            return a.isDone - b.isDone
        })
        setTodos(newTodos)

    }
    const handleDeleteTodo = (todoId) => {
        console.log('todoId', todoId)
        const newTodos = [...todos].filter(todo => { // sort the list to make the done task go to bottom
            return todo.id !== todoId
        });
        setTodos(newTodos)
    }
    // const handleDelete ... [18:10]


    return <Card raised sx={{ maxWidth: 800, minWidth: 275 }}>
        <AddInputContainer handleAddTodo={handleAddTodo} />
        <hr />
        {/* <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem /> */}
        <Box p={1}>
            <Input style={{ width: '100%' }} placeholder="Search task" variant="standard" value={searchValue} onChange={e => setSearchValue(e.target.value)} />

        </Box>
        <StyledGridBox>
            <Box display={"flex"}>
                Status  <ArrowDownwardIcon fontSize="small" />

            </Box>
            <Box>
                Name:
            </Box>
            <Box>
                CreatedAt:
            </Box>
        </StyledGridBox>
        {
            todos.filter(item => {
                return item.name.toLowerCase().includes(searchValue.toLowerCase())
            }).map(({ id, name, isDone, createdAt }) => {
                return <TodoItem handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} id={id} name={name} isDone={isDone} createdAt={createdAt} key={`todo-item-${id}`} />
            })
        }


    </Card>
}

export default TodoContainer


/**
 * !! EXERCISE:
 * 
 * TODO 1: Focus back to input when submit (keyword: useRef) (Medium)
 * TODO 2: Add Sort feature to the list (Hard)
 * TODO 3: Add Filter depends on status (done/undone) (Medium)
 * TODO 4: Add total done task / total task (eg: 2/10) (Easy)
 * 
 * 
 */