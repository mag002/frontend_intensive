import { Button, Box, Checkbox, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'

const StyledParagraph = styled(Typography)`
    margin-bottom: 0px!important;
    display: flex;
    align-items: center;
`

const TodoItem = () => {
    return <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" gap={1}>
            <Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }} defaultChecked />
            <StyledParagraph variant="body1" gutterBottom>
                Task name
            </StyledParagraph>
        </Box>
        <Box>
            <Button>
                <CloseIcon />
            </Button>
        </Box>
    </Box>
}
export default TodoItem