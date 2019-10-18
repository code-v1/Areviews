import React, { Component } from 'react'
import Card from '../components/StreamsComponents/Card'
import API from '../utils/twitch'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: null,
      streams: []
    }
  }

  async componentDidMount() {
    const { game } = this.props.location.state
    // FTR not sure if I actually need to save the game to state
    this.setState({
      game
    })

    const streams = await API.get('https://api.twitch.tv/helix/streams')
    let data = streams.data.data
    data.map(stream => {
      let newURL = stream.thumbnail_url
        .replace('{width}', '300')
        .replace('{height}', '300')
      stream.thumbnail_url = newURL
      return stream
    })
    let top5 = data.splice(0, 6)
    this.setState({
      streams: top5
    })
  }

  render() {
    const { game, streams } = this.state
    return (
      <>
        {this.state.game && (
          <>
            <h1> {game.name} game page!</h1>
            <div className='zi-fieldset'>
              <div className='zi-caption'>
                <div>
                  <img
                    src={game.box_art_url}
                    alt=''
                    className='zi-avatar huge'
                  />
                </div>
                <br />
                <button className='zi-btn primary ghost '>
                  Save {game.name}
                </button>
              </div>
              <div className='zi-more' />
              <div className='zi-fieldset-content'>
                Welcome to the {game.name} detail page! Here you can view more
                stuff on this game! You can view the top streamers playing{' '}
                {game.name}, right now! Save {game.name} to your collection.
                Once saved you will then be able to interact with the community!
                <div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </>
        )}
        <br />

        <div className='container'>
          {streams &&
            streams.map(stream => <Card stream={stream} key={stream.id} />)}
        </div>
        <style jsx>{`
          .card-container {
            display: flex;
          }

          .card-img-badge {
            display: block;
          }

          .welcome-tag {
            margin-right: 10rem;
          }

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
}
