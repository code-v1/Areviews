import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>This is the home page</h1>
        <div className='zi-card'>
          <h3>Welcome back, {this.props.user.username}</h3>
        </div>
      </div>
    )
  }
}
