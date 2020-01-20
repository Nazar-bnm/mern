import React, { Component } from 'react';
import Storm from './assets/images/storm_in_glases.jpg';

import { Counter } from './components/Counter';

export default class App extends Component {
  state = { user: null };

  componentDidMount() {
    this.callAPI();
  }

  callAPI = () => {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(({ user }) => {
        if (!this.state.user) {
          this.setState({ user });
        }

        console.log('user', user)
      });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        {user ? <h1>{`Hello ${user.username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={Storm} alt="storm" />
        <Counter test="test props" />
        <button onClick={this.callAPI}>Call</button>
      </div>
    );
  }
}
