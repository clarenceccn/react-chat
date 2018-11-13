import React from "react";
import './style.css';

const MessageInput = props => (
  <div className="inherit-height">
    <form className="inherit-height" onSubmit={props.submitMessageHandler}>
      <textarea className="chat-input" onKeyUp={props.handleMessageChange} rows="1" placeholder="Type message here..." />
    </form>
  </div>
);

export default MessageInput;
