import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div>
      <h1>This is the home page</h1>
      <div className='zi-fieldset'>
        <div className='zi-fieldset-content'>
          <h1>Welcome back, {props.user.username}!</h1>
          <p>
            Click on one of the buttons below to navigate between pages. The nav
            elements will be at the top of the screen on the other pages.
          </p>
        </div>
        <div className='zi-fieldset-footer'>
          <p>Browse the most watched games on twitch</p>
          <Link to='top-games'>
            <button className='zi-btn mini auto primary'>Games</button>
          </Link>
        </div>
        <div className='zi-fieldset-footer'>
          <p>See which streamers have the most active viewers</p>
          <button className='zi-btn mini auto primary'>Streams</button>
        </div>
        <div className='zi-fieldset-footer'>
          <p>
            Visit your profile to see your favorite games, comment history, and
            settings
          </p>
          <button className='zi-btn mini auto primary'>Profile</button>
        </div>
      </div>
    </div>
  )
}
