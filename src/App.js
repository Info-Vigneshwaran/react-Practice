import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inc: 1,
      todosdata: [],
      loading: false,
    };

    this.incrementMe = this.incrementMe.bind(this);
    this.todoApicall = this.todoApicall.bind(this);
  }

  todoApicall = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          todosdata: json,
        });
      });
  };

  incrementMe = () => {};
  render() {
    return (
      <>
        <div>
          <button onClick={this.todoApicall}>Call API</button>
          <button onClick={this.incrementMe}>Increment</button>
        </div>
      </>
    );
  }
}
export default App;
