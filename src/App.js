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
    fetch('https://jsonplaceholder.typicode.com/users').then(async (res) => {
      let json_t = await res.json();
      console.log(json_t);
      let new_text = await res.text();
      // console.log(await res.json());
      console.log(new_text);
      this.setState({
        todosdata: json_t,
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
