import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    const data = fetch('http://paxform.local/wp-json');
    console.log(data);
    return (
      <div>Home</div>
    )
  }
}
