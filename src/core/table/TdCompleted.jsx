import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Done() {
  const [done, setDone] = useState({ isToggleDone: false });

  function handleClick() {
    setDone((prevState) => ({
      isToggleDone: !prevState.isToggleDone,
    }));
  }

  return (
    <td>
      <button
        onClick={handleClick}
        className={done.isToggleDone ? "completed" : "notCompleted"}
      >
        {done.isToggleDone ? "Mark as Done" : "Mark as Not done"}
      </button>
    </td>
  );
}
export { Done };

/*
class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleDone: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleDone: !prevState.isToggleDone,
    }));
  }

  render() {
    return (
      <td>
        <button
          onClick={this.handleClick}
          className={this.state.isToggleDone ? "completed" : "notCompleted"}
        >
          {this.state.isToggleDone ? "Mark as Done" : "Mark as Not done"}
        </button>
      </td>
    );
  }
}

export { Done };
*/
