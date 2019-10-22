import React from 'react'
import Brand from './Brand'
import Menu from './Menu'
import { Link } from 'react-router-dom'

export default function Nav({ user, handleLogout }) {
  return (
    <header className='zi-card'>
      <Brand user={user} brand='W I L C O' />
      {user && (
        <>
          <Menu />
          <Link to='/'>
            <button
              className='zi-btn auto success'
              onClick={handleLogout}
              to='logout'
            >
              Logout
            </button>
          </Link>
        </>
      )}
      <style>{`
          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          a {
            color: black;
            height: 100%;
          }
  
          a:hover {
            text-decoration: none;
            color: #09d3ac;
          }
        `}</style>
    </header>
  )
}
