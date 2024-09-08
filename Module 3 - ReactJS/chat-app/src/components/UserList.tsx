import { User } from "../types"
import { ENDPOINT } from "../utils/constant"

interface UserListProps {
    userList: User[],
    currentUser: User,
    selectedUser: User | undefined,
    handleSelectUser: (user: User) => void;
}

function UserList({ userList, handleSelectUser, currentUser, selectedUser }: UserListProps) {
    return <div className="w-3/12 border-e-2 h-screen ">
        <div className="bg-blue-400 p-2 h-3/12 text-white font-bold">
            <h3>Friends </h3>
        </div>
        {userList.filter(user => user.id !== currentUser.id).map(user => {
            return <div onClick={() => handleSelectUser(user)} key={user.id} className={`${selectedUser && selectedUser.id === user.id ? 'bg-blue-200' : ''} hover:bg-blue-200 flex shadow-xl mb-2 p-2`}>
                <div>
                    <img className="w-6/12 rounded-full border" src={ENDPOINT + user.avatar} />
                </div>
                <div>
                    <p>{user.name}</p>
                    <p>status: {user.status}</p>
                </div>
            </div>
        })}
    </div>
}

export default UserList