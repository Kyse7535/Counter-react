import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incrementer: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ incrementer: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.changeIncrementer(parseInt(this.state.incrementer, 10));
    this.props.isSettingIncrementer();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          min="1"
          onChange={this.handleChange}
          value={this.state.incrementer}
        />
        <input type="submit" value="changer" />
      </form>
    );
  }
}

export default Form;
