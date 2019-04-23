// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBeenClicked: false,
    }
    // console.log(this.state)
  }
  
  handleClick = () => {
    // Update our state here...
    this.setState({
      hasBeenClicked: true,
      currentTheme: 'blue'
    })
  };
  
  render() {
    // console.log(this.state)

    return (
    <div>
      <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
      <button onClick={this.handleClick}>Click me!</button>
    </div>
    )
  }
}
