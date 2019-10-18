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
            Welcome to Areviews! Start by browsing the top games on twitch. Once
            you save a game you can begin to join the community by commenting on
            your favorite games! Tops streams are a bonus too!
          </p>
          <div className='zi-more'></div>
          <p>I will be adding direct links to streams soon!</p>
        </div>
        <div className='zi-fieldset-footer'>
          <p>
            Start browsing the top games now. If you see a game you like be sure
            to save it, it may not be a top game for long!
          </p>
          <Link to='top-games'>
            <button className='zi-btn mini auto primary'>Browse Now!</button>
          </Link>
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
