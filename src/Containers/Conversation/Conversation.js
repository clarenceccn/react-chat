import React from "react";
import MessageItem from "../MessageItem/MessageItem";

const Conversation = props => (
  <div>
    {props.messages.map((message, index) => (
      <MessageItem />
    ))}
  </div>
);

export default Conversation;
