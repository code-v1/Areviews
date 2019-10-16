import React, { Component } from 'react'
import userUtils from '../utils/user'
import LoginForm from '../components/LoginForm'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: null
    }
  }

  updateMsg = msg => {
    this.setState({ msg: msg })
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm {...this.props} updateMsg={this.updateMsg} />
        {this.state.msg && (
          <p className='zi-note error'>
            <span className='zi-note-type'>ERROR:</span> {this.state.msg}
          </p>
        )}
      </div>
    )
  }
}
