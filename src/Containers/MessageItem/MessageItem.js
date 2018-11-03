import React from "react";

const MessageItem = props => (
  <div>
    <div>
      <p>User name</p>
      <p>Timestamp </p>
    </div>
    <p>{props.message.data}</p>
  </div>
);

export default MessageItem;
