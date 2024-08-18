import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, CircularProgress } from "@mui/material";
import Card from '@mui/material/Card';
import { useEffect, useState } from "react";
import { getCurrentDateWithFormat } from "../../utils";
import AddInputContainer from "../AddInputContainer";
import StyledGridBox from "../StyledGridBox";
import TodoItem from "../TodoItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const TodoContainer = () => {
    // state: listTodo=[{id:1, name: 'Clean the room', isDone: true, createdAt: time}]
    //  Step 1: have an array and can add a new item to that array via the AddInputContainer
    //  Step 2: Render the Todo Item depends on listTodoState
    // 

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [todos, setTodos] = useState([])
    const [searchValue, setSearchValue] = useState("");
    const [sort, setSort] = useState({
        key: 'isDone',
        asc: true,
    });
    const [statusFilter, setStatusFilrer] = useState('all');
    // when cclick on add button, we get the value from input
    // on parent container that control the state, we have the input from children component

    // add new object to the state depends on children input

    const fetchTodos = async () => {
        try {
            const res = await fetch('http://localhost:3001/todos');
            const data = await res.json();
            setTodos(data);
        } catch (e) {
            setError(e.message)
            console.log('e', e)
        }
        setIsLoading(false);
    }



    // Call the API
    useEffect(() => {
        if (isLoading) {
            fetchTodos();
        }
    }, [isLoading])

    const titleList = [
        {
            key: 'isDone',
            label: 'Status'
        },
        {
            key: 'name',
            label: 'Task name'
        },
        {
            key: 'createdAt',
            label: 'Created at'
        }
    ]
    // [17:10]
    const handleAddTodo = (taskName) => {
        const newTodos = [{
            id: Date.now(),
            name: taskName,
            isDone: false,
            createdAtLabel: getCurrentDateWithFormat(),
            createdAt: Date.now(),
        }, ...todos];

        setTodos(newTodos)
    }

    const handleUpdateTodo = (todoId) => {
        console.log('todoId', todoId)
        const newTodos = [...todos];
        const updatedTodo = newTodos.find(todo => todo.id === todoId);
        updatedTodo.isDone = !updatedTodo.isDone;
        setTodos(newTodos)

    }
    const handleDeleteTodo = (todoId) => {
        console.log('todoId', todoId)
        const newTodos = [...todos].filter(todo => { // sort the list to make the done task go to bottom
            return todo.id !== todoId
        });
        setTodos(newTodos)
    }


    const totalDone = todos.reduce((total, item) => {
        if (item.isDone) {
            return total = total + 1
        }
        return total
    }, 0)

    const handleSelectFilter = (e) => {
        setStatusFilrer(e.target.value)
    }

    const handleSort = key => {
        console.log('key', key)
        if (key === sort.key) {
            // change direction
            setSort({
                key,
                asc: !sort.asc
            })
        } else {
            setSort({
                key,
                asc: true
            })
        }
    }

    if (isLoading) {
        return <CircularProgress />
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return <Card raised sx={{ maxWidth: 800, minWidth: 275 }}>
        <button onClick={() => setIsLoading(true)}>Reload data</button>
        <AddInputContainer handleAddTodo={handleAddTodo} />
        <hr />
        {/* <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem /> */}

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                Advanced filter
            </AccordionSummary>
            <AccordionDetails>
                <StyledGridBox>

                    <Box display="flex">
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Status:</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                row
                                value={statusFilter}
                                onChange={handleSelectFilter}
                            >
                                <FormControlLabel value="all" control={<Radio />} label="All" />
                                <FormControlLabel value="done" control={<Radio />} label="Done" />
                                <FormControlLabel value="not-done" control={<Radio />} label="Not done" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </StyledGridBox>
                <Box p={1}>
                    <Input style={{ width: '100%' }} placeholder="Search task" variant="standard" value={searchValue} onChange={e => setSearchValue(e.target.value)} />

                </Box>
            </AccordionDetails>
        </Accordion>
        <Box p={1}>
            Done:{totalDone}/{todos.length}
        </Box>

        <StyledGridBox>
            {
                titleList.map(title => {
                    return <Box display="flex" key={`title_${title.key}`} onClick={() => handleSort(title.key)}>
                        {title.label}
                        {

                            (sort.key === title.key && sort.asc) && <ArrowDownwardIcon fontSize="small" />
                        }
                        {
                            (sort.key === title.key && !sort.asc) && <ArrowUpwardIcon fontSize="small" />
                        }

                    </Box>
                })
            }

        </StyledGridBox>

        {
            todos.filter(item => {
                if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    if (statusFilter === 'all') {
                        return true
                    }
                    if (statusFilter === 'done') {
                        return item.isDone
                    }
                    if (statusFilter === 'not-done') {
                        return !item.isDone
                    }
                } else {
                    return false
                }
            })
                .sort((a, b) => {
                    let direction = sort.asc ? 1 : -1
                    return (a[sort.key] < b[sort.key] ? -1 : 1) * direction
                })
                .map(({ id, name, isDone, createdAtLabel, createdAt }) => {
                    return <TodoItem handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} id={id} name={name} isDone={isDone} createdAt={createdAtLabel} key={`todo-item-${id}`} />
                })
        }


    </Card>
}

export default TodoContainer

// useEffect
// json-server 

/**
 * !! EXERCISE:
 * [17:45]
 * TODO 1: Focus back to input when submit (keyword: useRef) (Medium)   [x]
 * TODO 2: Add Sort feature to the list (Hard)                          [x]
 * TODO 3: Add Filter depends on status (done/undone) (Medium)          [x]
 * TODO 4: Add total done task / total task (eg: 2/10) (Easy)           [x] 
 * 
 * 
 */