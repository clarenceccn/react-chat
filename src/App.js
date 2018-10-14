import React, { Component } from "react";
import "./App.css";
import MainView from "./Components/MainView/MainView";
import SideBar from "./Components/SideBar/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <MainView />
      </div>
    );
  }
}

export default App;
