import React, { Component } from 'react';

import Neons from "./fish/neon";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Shopping Cart</h1>
        <Neons />
        
      </div>
    );
  }
}
