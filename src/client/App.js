import React, { Component } from 'react';
import Storm from './assets/images/storm_in_glases.jpg';

import { Counter } from './components/Counter';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(({ user }) => this.setState({ user }));
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        {user ? <h1>{`Hello ${user.username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={Storm} alt="storm" />
        <Counter test="test props" />
      </div>
    );
  }
}
