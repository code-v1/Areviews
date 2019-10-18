import React, { useState, useEffect } from 'react'
import API from '../utils/twitch'
import Card from '../components/GamesComponents/Card'

export default function TopGames() {
  const [games, setGames] = useState([])
  useEffect(() => {
    const getTopGames = async () => {
      let games = await API.get('https://api.twitch.tv/helix/games/top')
      let data = games.data.data
      data.map(game => {
        let newURL = game.box_art_url
          .replace('{width}', '2000')
          .replace('{height}', '2000')
        game.box_art_url = newURL
        return game
      })
      setGames(data)
    }
    getTopGames()
  })

  console.log(games)
  return (
    <div>
      <h1>Top Games</h1>
      <div className='container'>
        {games && games.map(game => <Card game={game} key={game.name} />)}
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
    </div>
  )
}
