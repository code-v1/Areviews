import React from 'react'
import Card from './Card'

export default function StreamContainer({ streams }) {
  return (
    <>
      <div className='container'>
        {streams &&
          streams.map(stream => <Card stream={stream} key={stream.id} />)}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .container > * {
          flex: 1 1 1 325px;
        }
      `}</style>
    </>
  )
}
