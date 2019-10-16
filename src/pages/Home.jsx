import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        {this.props.user && (
          // everything a user sees once logged in
          <h3>Welcome, {this.props.user.username}</h3>
        )}
        {/* everything a user sees not logged in */}
        {!this.props.user && (
          <div className='zi-fieldset'>
            <div className='zi-fieldset-content'>
              <h1>Welcome to Areviews!</h1>
              <div className='zi-more' />
              <p>
                Join to track the hottest video games being played by the pros
                right now! Leave comments and build your game identity right
                here, right now!
              </p>
              <div className='zi-caption'>
                <Link to='/signup'>
                  <button className='zi-btn small success shadow'>
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
            <div className='zi-fieldset-footer'>
              <p>Already a member? </p>
              <Link to='/login'>
                <button className='zi-btn small success ghost'>Login</button>
              </Link>
            </div>
          </div>
        )}
      </>
    )
  }
}
