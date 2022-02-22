import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  // constructor() {
  //   super(); //need to refer to the base object
  //   this.handleIncrement = this.handleIncrement.bind(this); //Need to bind this function to the object so that we can pass handleIncrement as an argument?
  // }

  //Using an arrow function does not require binding
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 })
  }

  render() {

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
        onClick={this.handleIncrement}
        className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += (this.state.value === 0) ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
