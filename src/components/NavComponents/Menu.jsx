import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <p>
        <NavLink to='/top-games'>Top Games</NavLink>
      </p>
      <p>
        <NavLink to='/top-streams'>Top Streams</NavLink>
      </p>
      <p>
        <NavLink to='/profile'>Profile</NavLink>
      </p>
    </>
  )
}
