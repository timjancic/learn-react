import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  // constructor() {
  //   super(); //need to refer to the base object
  //   this.handleIncrement = this.handleIncrement.bind(this); //Need to bind this function to the object so that we can pass handleIncrement as an argument?
  // }

  //Using an arrow function does not require binding
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
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
        <ul>
          { this.state.tags.map(tag => <li key={ tag }>{ tag }</li>) }
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += (this.state.count === 0) ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
