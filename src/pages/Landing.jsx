import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='zi-fieldset'>
      <div className='zi-fieldset-content'>
        <h1>Welcome to Areviews!</h1>
        <div className='zi-more' />
        <p>
          Join to track the hottest video games being played by the pros right
          now! Leave comments and build your game identity right here, right
          now!
        </p>
        <div className='zi-caption'>
          <Link to='/signup'>
            <button className='zi-btn small success shadow'>Sign Up</button>
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
  )
}
