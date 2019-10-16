import React from 'react'

export default function Nav(props) {
  const { user, handleLogout } = props
  return (
    <header className='zi-card'>
      <h2>W I L C O</h2>
      <nav>
        {user && (
          <button
            className='zi-btn mini success'
            onClick={handleLogout}
            to='logout'
          >
            Logout
          </button>
        )}
      </nav>
      <style>{`
          header { 
            display: flex;
            align-items: center;
           } 

           header h1 {
             justify-content: flex-start;
           }

            nav {
              display: flex;
           }

           nav button {
             justify-content: flex-end;
           }
        
        `}</style>
    </header>
  )
}
