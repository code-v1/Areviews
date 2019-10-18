import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='zi-fieldset'>
      <div className='zi-fieldset-content'>
        <h1>Welcome to Areviews!</h1>
        <hr />
        <p>
          Join to keep track of the hottest video games being played by the pros
          right now! See who has the biggest follow, live! Leave comments and
          build your game identity right here, right now with Areviews!
        </p>
        <p>
          This application has been build using React, Express, Node, Mongo DB,
          JSON Web Tokens, Zeit Style CSS, the new Twitch API, and of course,
          lots of love.
        </p>
        <div className='zi-caption'>
          <Link to='/signup'>
            <button className='zi-btn auto success shadow'>Sign Up</button>
          </Link>
        </div>
      </div>
      <div className='zi-fieldset-footer'>
        <p>Already a member? </p>
        <Link to='/login'>
          <button className='zi-btn auto success ghost'>Login</button>
        </Link>
      </div>
    </div>
  )
}
