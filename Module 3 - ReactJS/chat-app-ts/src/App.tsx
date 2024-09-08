import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import UserList from './components/UserList';
import ChatContainer from './components/ChatContainer';
import Login from './components/Login';
import styled from 'styled-components';

const ENDPOINT = "http://localhost:4000";
const socket = socketIOClient(ENDPOINT);

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('loginSuccess', (user) => {
      setCurrentUser(user);
      setIsLoggedIn(true);
    });

    socket.on('usersList', setUsers);

    return () => {
      socket.off('loginSuccess');
      socket.off('usersList');
    };
  }, []);

  const handleLogin = (userName) => {
    socket.emit('login', { userName });
  };

  return (
    <AppContainer>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <UserList users={users} currentUser={currentUser} onUserSelect={(user) => { }} />
          <ChatContainer socket={socket} currentUser={currentUser} />
        </>
      )}
    </AppContainer>
  );
};

export default App;
