import React, { Component } from "react";
import Conversation from "../../Containers/Conversation/Conversation";
import MessageInput from "../../Containers/MessageInput/MessageInput";

class MainView extends Component {
  state = { messages: [] };
  render() {
    return (
      <div>
        <Conversation />
        <MessageInput messages={this.state.messages} />
      </div>
    );
  }
}

export default MainView;
