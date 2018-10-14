import React, { Component } from "react";
import Conversation from "../../Containers/Conversation/Conversation";
import MessageInput from "../../Containers/MessageInput/MessageInput";

class MainView extends Component {
  render() {
    return (
      <div>
        <Conversation />
        <MessageInput />
      </div>
    );
  }
}

export default MainView;
