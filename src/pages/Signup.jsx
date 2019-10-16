import React, { Component } from 'react'
import SignupForm from '../components/SignupForm'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = { msg: null }
  }

  updateMsg = msg => {
    this.setState({ msg: msg })
  }

  render() {
    return (
      <>
        <SignupForm {...this.props} updateMsg={this.updateMsg} />
        {this.state.msg && (
          <p className='zi-note error'>
            <span className='zi-note-type'>ERROR:</span> {this.state.msg}
          </p>
        )}
      </>
    )
  }
}
