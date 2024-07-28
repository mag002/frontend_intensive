import { Button, Box, Checkbox, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'
import StyledGridBox from '../StyledGridBox';

const StyledParagraph = styled(Typography)`
    margin-bottom: 0px!important;
    display: flex;
    align-items: center;
`

const TodoItem = ({ id, name, isDone, createdAt, handleUpdateTodo, handleDeleteTodo }) => {
    return <StyledGridBox id={id} >
        <Checkbox onChange={() => handleUpdateTodo(id)} inputProps={{ 'aria-label': 'Checkbox demo' }} checked={isDone} />
        <StyledParagraph variant="body1" >
            {name}
        </StyledParagraph>
        <StyledParagraph variant="body1" >
            {createdAt}
        </StyledParagraph>
        <Box>
            <Button onClick={() => handleDeleteTodo(id)}>
                <CloseIcon />
            </Button>
        </Box>
    </StyledGridBox>

}
export default TodoItem