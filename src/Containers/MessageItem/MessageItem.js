import React from "react";
import './style.css';

const MessageItem = props => (
  <div className="message-item">
    <p className="message-username">User name</p> 
    <p className="message-time">Timestamp </p>
    <p className="message-text">{props.message.data}</p>
  </div>
);

export default MessageItem;
