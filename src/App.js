import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from "./components/counters";
import Plot from 'react-plotly.js';

class App extends Component {
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
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
              },
              {type: 'bar', x: [1, 2, 3], y: [2, 6, 3]},
            ]}
            layout={ {width: 640, height: 480, title: 'A Fancy Plot'} }
          />
      </React.Fragment>
    );
  }
}

export default App;
