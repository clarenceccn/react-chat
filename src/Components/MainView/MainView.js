import React, { Component } from "react";
import Conversation from "../../Containers/Conversation/Conversation";
import MessageInput from "../../Containers/MessageInput/MessageInput";
import "./MainStyle.css";

class MainView extends Component {
  state = {
    messages: []
  };

  getMessages = () => {
    fetch("localhost:8080/messages")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  };

  submitMessage = e => {
    // fetch("localhost:8080/messages", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     data: e.target.value
    //   })
    // });
    e.preventDefault();
  };

  handleMessageChange = e => {
    if (e.key === "Enter") {
      this.setState({
        messages: [...this.state.messages, { data: e.target.value }]
      });
      e.target.value = "";
    }
  };

  deleteMessage = () => { };
  render() {
    return (
      <div className="main">
        <div className="message">
          <Conversation
            messages={this.state.messages}
          />
        </div>
        <div className="chat">
          <MessageInput
            submitMessageHandler={this.submitMessage}
            handleMessageChange={this.handleMessageChange}
          />
        </div>
      </div>
    );
  }
}

export default MainView;
