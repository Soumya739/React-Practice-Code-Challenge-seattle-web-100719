import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super(),
      this.state = {
        sushi: [],
        startNumber: 0,
        endNumber: 4,
        total$: 100,
        eatenItems: []
      }
  }

  componentWillMount = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ sushi: json })
      })
  }

  getFourSushi = () => {
    let fourSushi = this.state.sushi.slice(this.state.startNumber, this.state.endNumber)
    console.log(fourSushi)
    return fourSushi
  }

  eatenValue = (amt, itemId) => {
    if (amt < this.state.total$ && !(this.state.eatenItems.includes(itemId))) {
      this.setState(prevState => ({ total$: this.state.total$ - amt, eatenItems: [...prevState.eatenItems, itemId] }))

    }

  }

  getNextFourSushi = () => {
    this.setState({ endNumber: this.state.endNumber + 4, startNumber: this.state.startNumber + 4 })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer fourSushi={this.getFourSushi()} eatenItems={this.state.eatenItems} onEatenValue={this.eatenValue} getNextFourSushi={this.getNextFourSushi} />
        <Table total$={this.state.total$} eatenItems={this.state.eatenItems} />
      </div>
    );
  }
}

export default App;