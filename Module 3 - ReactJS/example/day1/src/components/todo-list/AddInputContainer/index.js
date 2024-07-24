import { Button, TextField, Box } from '@mui/material';

const AddInputContainer = () => {
    return <Box p={4} display="flex" gap={3}>

        <TextField id="outlined-basic" label="Add new Item" variant="outlined" />
        <Button>Add</Button>
    </Box>
}

export default AddInputContainer