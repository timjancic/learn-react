import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //need to create clone so we don't reference directly
    const index = counters.indexOf(counter);
    counters[index] = {...counter}; //also need to create clone of object given, otherwise counters[index] will be a reference
    counters[index].value++;
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters })
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
        Reset
        </button>
        { this.state.counters.map(counter =>
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        )}
      </div>
    );
  }
}

export default Counters;
