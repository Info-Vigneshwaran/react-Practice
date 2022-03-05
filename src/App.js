import React, { Component } from 'react';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.setstate = {
      inc: 1,
      todosdata: [],
      loading: false,
    };

    this.incrementMe = this.incrementMe.bind(this);
    this.todoApicall = this.todoApicall.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  todoApicall = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json)
      .then((data) => {
        this.setState(
          {
            todosdata: data,
            loading: true,
          },
          () => {
            console.log(this.state.loading);
          }
        );
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
        <p>{this.state.loading}</p>
      </>
    );
  }
}
export default App;
