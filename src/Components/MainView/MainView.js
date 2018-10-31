import React, { Component } from "react";
import Conversation from "../../Containers/Conversation/Conversation";
import MessageInput from "../../Containers/MessageInput/MessageInput";

class MainView extends Component {
  state = { messages: [] };

  componentDidMount() {
    this.getMessages();
  }

  getMessages = () => {
    fetch("localhost:8080/messages")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  };

  addMessage = (e) => {
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
      <div>
        <Conversation messages={this.state.messages} />
        <MessageInput addMessageHandler={this.addMessage} />
      </div>
    );
  }
}

export default MainView;
