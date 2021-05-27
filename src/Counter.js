import { Component } from "react";
import Incrementer from "./Incrementer";
import Form from "./Form";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isChangingIncrement: false,
      incrementer: 1
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.changeIncrementer = this.changeIncrementer.bind(this);
    this.isSettingIncrementer = this.isSettingIncrementer.bind(this);
  }

  increment() {
    this.setState((state) => ({ counter: state.counter + state.incrementer }));
  }

  isSettingIncrementer() {
    this.setState((state) => ({
      isChangingIncrement: !state.isChangingIncrement
    }));
  }

  decrement() {
    let counter = this.state.counter;
    let NewCounter = counter > 0 ? counter - this.state.incrementer : 0;
    this.setState({ counter: NewCounter });
  }

  changeIncrementer(incrementer) {
    this.setState({ incrementer });
  }

  render() {
    let setIncrementer = !this.state.isChangingIncrement ? (
      <Incrementer onClick={this.isSettingIncrementer} />
    ) : (
      <Form
        changeIncrementer={this.changeIncrementer}
        isSettingIncrementer={this.isSettingIncrementer}
      />
    );

    return (
      <>
        <div className="text-center">
          <h1>Counter</h1>
          <h2>{this.state.counter}</h2>
          <button onClick={this.increment} className="mr-1">
            Increment: {this.state.incrementer}
          </button>
          <button onClick={this.decrement}>
            Decrement: {this.state.incrementer}
          </button>
        </div>
        <div className="text-center my-2">{setIncrementer}</div>
      </>
    );
  }
}

export default Counter;
