import React, { Component } from "react";
import "./style.css";

class MessageItem extends Component {
  componentDidMount() {
    this.conversationViewRef.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    this.conversationViewRef.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div
        className="message-item"
        key={this.props.index}
        ref={el => (this.conversationViewRef = el)}
      >
        <p className="message-username">User name</p>
        <p className="message-time">Timestamp </p>
        <p className="message-text">{this.props.message.data}</p>
      </div>
    );
  }
}

export default MessageItem;
