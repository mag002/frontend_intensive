import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Socket } from 'socket.io-client';

const Container = styled.div`
  width: 75%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const Message = styled.div<{ isOwn: boolean }>`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  max-width: 60%;
  align-self: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
  background-color: ${props => props.isOwn ? '#a0e0a0' : '#e0e0e0'};
`;

const InputContainer = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

interface Props {
  socket: Socket;
  currentUser: { id: string; name: string; avatar: string };
}

const ChatContainer: React.FC<Props> = ({ socket, currentUser }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('messageList', (message) => {
      console.log('messageList', message)
      setMessages(message)
    });

    return () => {
      socket.off('messageList');
    };
  }, [socket]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = { from: currentUser.id, to: currentUser.id, text: message }; // Update as necessary for target user
      socket.emit('sendMessage', newMessage);
      setMessage('');
      setMessages([...messages, { ...newMessage, isOwn: true }]);
    }
  };

  return (
    <Container>
      <Messages>
        {messages.map((msg, index) => (
          <Message key={index} isOwn={msg.from === currentUser.id}>{msg.text}</Message>
        ))}
      </Messages>
      <InputContainer>
        <TextInput
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </InputContainer>
    </Container>
  );
};

export default ChatContainer;
