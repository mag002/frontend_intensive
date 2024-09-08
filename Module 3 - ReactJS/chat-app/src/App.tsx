import { useEffect, useState } from 'react';
import Login from './components/Login';
import socketIOClient from 'socket.io-client'
import { User } from './types';
import UserList from './components/UserList';
import { ENDPOINT } from './utils/constant';
import ChatContainer from './components/ChatContainer';

const socket = socketIOClient(ENDPOINT);


// function App({handleLogin}:{handleLogin:()=>void}) {
function App() {
  const [userList, setUserList] = useState<Array<User>>([])
  const [currentUser, setCurrentUser] = useState<User>();
  const [selectedUser, setSelectedUser] = useState<User>();

  // access to Chat app  => user open the app => App.tsx loaded
  // => connect to server through socket.io first time (and only 1 time)

  // after login => have user data => store that user in a state 


  // listen to userList event => return online users => console.log(users) => Tab 1: userName A, tab 2: userName B
  // tab 2 userList will have userName A

  // emit => on // BE: have on => FE can emit
  // BE have emit => FE can on
  useEffect(() => {
    console.log('socket', socket);
    socket.on('loginSuccess', (user: User) => {
      console.log("DATA", user)
      setCurrentUser(user)
      // setCurrentUsers()
      // setIsLoggedIn
    })
    socket.on('usersList', (users: User[]) => {
      console.log('UserList run', users)
      setUserList(users)
    })

    return () => {
      socket.off('loginSuccess')
      socket.off('usersList')
    }
    // listen or emit event
  }, [])

  // Login page ( input: name)

  // Userlist (list of the user)
  // Username/status/ avatar
  // Chat container (chat zone)
  function handleLogin(userName: string): void {
    console.log(userName);
    socket.emit('login', { userName })
    return
  }
  return (
    <>
      {!currentUser ? <Login handleLogin={handleLogin} />
        :
        <div className='flex'>
          <UserList currentUser={currentUser} selectedUser={selectedUser} handleSelectUser={setSelectedUser} userList={userList} />
          <ChatContainer userList={userList} socket={socket} selectedUser={selectedUser} currentUser={currentUser} />
        </div>

      }
    </>
  )
}

export default App