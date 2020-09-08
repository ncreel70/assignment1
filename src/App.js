import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput.js";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    user: [
      {
        username: "Jimmy",
        numChildren: 3.5,
      },
      {
        username: "Meg",
        numChildren: 3,
      },
      {
        username: "Mich",
        numChildren: 1,
      },
    ],
  };

  switchUsernameHandler = () => {
    this.setState({
      user: [
        {
          username: "Jim",
          numChildren: 3.5,
        },
        {
          username: "Meghan",
          numChildren: 3,
        },
        {
          username: "Terry",
          numChildren: 1,
        },
      ],
    });
  };

  userNameChangedHandler = (event) => {
    this.setState({
      user: [
        {
          username: event.target.value,
          numChildren: 3.5,
        },
        {
          username: "Meghan",
          numChildren: 3,
        },
        {
          username: "Terry",
          numChildren: 1,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchUsernameHandler}>Switch UserName</button>
        <UserInput changed={this.userNameChangedHandler} />
        <UserOutput
          username={this.state.user[0].username}
          numChildren={this.state.user[0].numChildren}
        />
        <UserOutput
          username={this.state.user[1].username}
          numChildren={this.state.user[1].numChildren}
        />
        <UserOutput
          username={this.state.user[2].username}
          numChildren={this.state.user[2].numChildren}
        />
      </div>
    );
  }
}

export default App;
