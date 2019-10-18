import React, { Component } from 'react'
import GamePageHeader from '../components/GamesComponents/GamePageHeader'
import StreamContainer from '../components/StreamsComponents/StreamContainer'
import API from '../utils/twitch'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      streams: [],
      views: null
    }
  }

  async componentDidMount() {
    const { game } = this.props.location.state
    const streams = await API.get(
      `https://api.twitch.tv/helix/streams?game_id=${game.id}`
    )
    let data = streams.data.data
    data.map(stream => {
      let newURL = stream.thumbnail_url
        .replace('{width}', '2000')
        .replace('{height}', '2000')
      stream.thumbnail_url = newURL
      return stream
    })

    let totalViews = data.reduce((acc, val) => {
      return acc + val.viewer_count
    }, 0)
    this.setState({ views: totalViews })

    let top5 = data.splice(0, 6)
    this.setState({
      streams: top5
    })
  }

  render() {
    const { game } = this.props.location.state
    const { streams, views } = this.state
    console.log(game, streams)
    return (
      <>
        {!game ? (
          <>
            <h1>Something seems to be wrong</h1>
          </>
        ) : (
          <>
            <GamePageHeader game={game} views={views} />
          </>
        )}
        <br />
        <StreamContainer streams={streams} />
        )}
      </>
    )
  }
}
