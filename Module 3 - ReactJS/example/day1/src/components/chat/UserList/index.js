import UserCard from "../UserCard"

function UserList() {
    return <div className="sidebar">
        <UserCard name="Patrick" age={20} avatar="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" online />
        <UserCard name="Martti" age={66} avatar="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" online={false} />
        <UserCard name="Martti" age={66} avatar="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" online />
        <UserCard name="Martti" age={66} avatar="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" online={false} />
        <UserCard name="Martti" age={66} avatar="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" online />
    </div>
}
export default UserList