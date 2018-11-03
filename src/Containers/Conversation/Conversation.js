import React from "react";
import MessageItem from "../MessageItem/MessageItem";
import './style.css'; 

const Conversation = props => (
  <div className="conversation-container">
    {props.messages.map((message, index) => (
      <MessageItem message={message}/>
    ))}
  </div>
);

export default Conversation;
