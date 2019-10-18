import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ game }) {
  return (
    <div className='zi-card game-card'>
      <img src={game.box_art_url} alt='' />
      <div className='zi-caption'>
        <h3>{game.name}</h3>
        <Link
          to={{
            pathname: `/game/${game.name}`,
            state: {
              game: game
            }
          }}
        >
          <button className='zi-btn auto shadow'>see more details</button>
        </Link>
      </div>
      <style>{`
        .game-card{
          margin-bottom: 1rem;
          width: 325px;
        }

        zi-caption {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}
