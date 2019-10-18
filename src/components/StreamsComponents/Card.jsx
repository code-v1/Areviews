import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ stream }) {
  return (
    <div className='zi-card game-card'>
      <img src={stream.thumbnail_url} alt='' />
      <div className='zi-caption'>
        {stream.title > 140 ? (
          <>
            <h3>{`${stream.title.substring(0, 140)}...`}</h3>
            <a href='#'>Show more</a>
          </>
        ) : (
          <h3>{stream.title}</h3>
        )}
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
