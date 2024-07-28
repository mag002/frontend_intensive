import { Button, TextField, Box } from '@mui/material';
import { useState } from 'react';

const AddInputContainer = ({ handleAddTodo }) => {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        if (!inputValue) {
            setError('Invalid task name')
            return
        }
        handleAddTodo(inputValue);
        setInputValue('')
    }
    //  Complete add function
    // - Step 1: change from button click event to form submit [17:10]
    // - Step 2 (Homework): focus back to input when submit (keyword: useRef)
    // falsy value= "" ~ false "--" ~ true
    return <Box component="form" p={4} display="flex" gap={3} onSubmit={handleSubmit}>
        <TextField error={!!error} helperText={error} id="outlined-basic" label="Add new Item" variant="outlined" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
        <Button type="submit" >Add</Button>
    </Box>
}

export default AddInputContainer