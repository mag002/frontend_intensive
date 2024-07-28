import styled from "styled-components"
import TodoContainer from "../TodoContainer"

const StyledCenterContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

function TodoList() {
    return <StyledCenterContainer>
        {/* TodoList */}
        <TodoContainer />
    </StyledCenterContainer>
}

export default TodoList