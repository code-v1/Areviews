import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Brand(props) {
  const { brand, user } = props
  return (
    <>
      {user ? (
        <NavLink className='brand' to='/home'>
          <h2>{brand}</h2>
        </NavLink>
      ) : (
        <NavLink className='brand' to='/'>
          <h2>{brand}</h2>
        </NavLink>
      )}
      <style jsx>{`
        a {
          color: black;
        }

        a:hover {
          text-decoration: none;
          color: #09d3ac;
        }
      `}</style>
    </>
  )
}
