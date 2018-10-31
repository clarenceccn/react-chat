import React from "react";

const MessageInput = props => (
  <div>
    <form onSubmit={props.addMessageHandler}>
      <textarea rows="1" placeholder="Type message here..." />
      <button type='Submit' >Enter</button>
    </form>
  </div>
);

export default MessageInput;
