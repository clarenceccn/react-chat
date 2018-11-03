import React, { Component } from "react";
import Conversation from "../../Containers/Conversation/Conversation";
import MessageInput from "../../Containers/MessageInput/MessageInput";
import "./MainStyle.css";

class MainView extends Component {
  state = { messages: [{ data: "hello world" }] };

  componentDidMount() {}

  getMessages = () => {
    fetch("localhost:8080/messages")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  };

  addMessage = e => {
    fetch("localhost:8080/messages", {
      method: "POST",
      body: JSON.stringify({
        data: e.target.value
      })
    });
  };

  deleteMessage = () => {};
  render() {
    return (
      <div className="main-container">
        <div className="message">
          <Conversation messages={this.state.messages} />
        </div>
        <div className="chat">
          <MessageInput addMessageHandler={this.addMessage} />
        </div>
      </div>
    );
  }
}

export default MainView;
