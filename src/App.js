import React, { Component } from 'react';
import './App.css';
import Tabs from './src/Tabs';
import Stripe from './Stripe';

const checkout = 'checkout';



class App extends Component {
  constructor(props) {
    super(props);

    // Default Screen
    this.state = {
      active: 'aTab'
    }
  }


  // Pass in components
  render() {
    const content = {
      aTab: <Stripe />,
      bTab: 'Stripe require identity verification to access real-time data(Charges etc...)',
    };

    return (
      <div style={{ paddingRight: 100, paddingLeft: 100 }}>
        <h1>BlaBla Ecommerce</h1>
        <Tabs
        active={this.state.active}
        onChange={active => this.setState({active})}
        >
        <div key='aTab'>Checkout</div>
        <div key='bTab'>Charges</div>
        </Tabs>
        <div style={{ marginTop: 20}}>
        {content[this.state.active]}
        </div>
      </div>
    );
  }
}

export default App;
