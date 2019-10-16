import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        {this.props.user && <h3>Welcome, {this.props.user.username}</h3>}
        <div>Welcome to the home page</div>
      </>
    )
  }
}
