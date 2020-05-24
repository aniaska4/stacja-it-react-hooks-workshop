import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => this.setState((prevState) => ({counter: prevState.counter + 1}));

  render() {
    console.log('RENDER');
    return (
      <div>
        <h2>Counter:</h2>
        <div>{this.state.counter}</div>
        <button onClick={this.incrementCounter}>+</button>
      </div>
    )
  }
}

export default Counter;