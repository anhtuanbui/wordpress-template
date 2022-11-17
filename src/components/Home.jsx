import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    fetch('http://paxform.local/wp-json/wp/v2/users/1').then((response) => response.json()).then((json) => {
      console.log(json);
    });
    return (
      <div>Home</div>
    )
  }
}
