import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  const { user, handleLogout } = props
  return (
    <header className='zi-card'>
      <h2>W I L C O</h2>
      <nav>
        {user && (
          <Link to='/'>
            <button
              className='zi-btn auto success'
              onClick={handleLogout}
              to='logout'
            >
              Logout
            </button>
          </Link>
        )}
      </nav>
      <style>{`
          header { 
            display: flex;
            align-items: center;
            justify-content: space-between;
           } 
        `}</style>
    </header>
  )
}
