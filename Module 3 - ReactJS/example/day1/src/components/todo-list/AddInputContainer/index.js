import { Button, TextField, Box } from '@mui/material';
import { useRef, useState } from 'react';

const AddInputContainer = ({ handleAddTodo }) => {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        if (!inputValue) {
            setError('Invalid task name')
            inputRef.current.focus()
            return
        }
        handleAddTodo(inputValue);
        setInputValue('')
        inputRef.current.focus()
    }
    //  Complete add function
    // - Step 1: change from button click event to form submit [17:10]

    // falsy value= "" ~ false "--" ~ true

    // Empty ref
    // Component did mount => ref = DOM ref
    // === not re render
    // input => trigger re-render
    // line 8 re run 
    // log current ref = DomREF
    return <Box component="form" p={4} display="flex" gap={3} onSubmit={handleSubmit}>
        <TextField inputRef={inputRef} error={!!error} helperText={error} id="outlined-basic" label="Add new Item" variant="outlined" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
        <Button type="submit" >Add</Button>
    </Box>
}

export default AddInputContainer