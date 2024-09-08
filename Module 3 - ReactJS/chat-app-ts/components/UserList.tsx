import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  width: 25%;
  height: 100vh;
  background-color: #f4f4f4;
  overflow-y: auto;
  border-right: 1px solid #ccc;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: bold;
`;

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface Props {
  users: User[];
  currentUser: User;
  onUserSelect: (user: User) => void;
}

const UserList: React.FC<Props> = ({ users, currentUser, onUserSelect }) => {
  return (
    <Sidebar>
      {users.filter(user => user.id !== currentUser.id).map(user => (
        <UserItem key={user.id} onClick={() => onUserSelect(user)}>
          <Avatar src={user.avatar} alt={user.name} />
          <UserInfo>
            <UserName>{user.name}</UserName>
          </UserInfo>
        </UserItem>
      ))}
    </Sidebar>
  );
};

export default UserList;
