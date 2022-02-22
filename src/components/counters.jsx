import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {

  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset} //pass event upward
          className="btn btn-primary btn-sm m-2"
        >
        Reset
        </button>
        { this.props.counters.map(counter =>
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement} //pass event upward
            onDelete={this.props.onDelete} //pass event upward
          />
        )}
      </div>
    );
  }
}

export default Counters;
