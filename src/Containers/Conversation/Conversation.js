import React, { Component } from "react";
import MessageItem from "../MessageItem/MessageItem";
import "./style.css";

class Conversation extends Component {
  render() {
    return (
      <div className="conversation-container">
        {this.props.messages.map((message, index) => (
          <MessageItem key={index} message={message} />
        ))}
      </div>
    );
  }
}

export default Conversation;
