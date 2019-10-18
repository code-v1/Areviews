import React from 'react'

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
          <>
            <h3 style={{ color: 'black' }}>{stream.user_name}</h3>
            <p>{stream.viewer_count} viewers</p>
            <button className='zi-btn disabled'>Stream</button>
          </>
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
