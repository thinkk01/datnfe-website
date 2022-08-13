import React from "react";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import './chat.css';

const projectID = '20cc05b8-9658-407a-a676-491e100d024a';

const Chat = () => {

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderNewChatForm={(creds) => {}}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default Chat;
