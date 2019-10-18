import React from 'react'

export default function Card({ game }) {
  return (
    <div className='zi-card game-card'>
      <img src={game.box_art_url} alt='' />
      <div className='zi-caption'>
        <h3>{game.name}</h3>
        <button className='zi-btn auto primary'>see more details</button>
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
