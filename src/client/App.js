import React, { Component } from 'react';
import Storm from './assets/images/storm_in_glases.jpg';

import { Counter } from './components/Counter';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI = () => {
    const { userData } = this.state;

    fetch('/api/getUsername')
      .then((res) => res.json())
      .then(({ user }) => {
        if (!userData) {
          this.setState({ userData: user });
        }

        console.log('userdata', user);
      });
  }

  render() {
    const { userData } = this.state;

    return (
      <div>
        {userData ? <h1>{`Hello ${userData.username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={Storm} alt="storm" />
        <Counter test="test props" />
        <button type="button" onClick={this.callAPI}>Call API</button>
      </div>
    );
  }
}
