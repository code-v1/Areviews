import React, { Component } from 'react'
import config from '../../utils/db'
import axios from 'axios'

export default class GamePageHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMsg: true,
      userGames: []
    }
  }

  componentDidMount = () => {
    return axios.get('/api/games', config).then(res => {
      const { favGames } = res.data
      let games = favGames.map(games => games.name)
      this.setState({
        userGames: games
      })
    })
  }

  componentDidUpdate = () => {
    // return axios.get('/api/games', config).then(res => {
    //   const { favGames } = res.data
    //   let games = favGames.map(games => games.name)
    //   this.setState({
    //     userGames: games
    //   })
    // })
  }

  handleMsg = () => {
    this.setState({ showMsg: false })
  }

  handleClick = game => {
    this.setState({
      userGames: []
    })
    return axios
      .post('/api/games', game, config)
      .then(res => {
        const { favGames } = res.data
        console.log(favGames)
      })
      .catch(err => console.log(err))
  }

  handleRemove = () => {}

  render() {
    const { game, views } = this.props
    const { showMsg, userGames } = this.state
   
    return (
      <div>
        <>
          <h1> {game.name} game page!</h1>
          <div className='zi-fieldset'>
            <div className='zi-caption'>
              <div>
                <img src={game.box_art_url} alt='' className='zi-avatar huge' />
              </div>
              <div className='zi-caption'>
                <h1>{game.name}</h1>
                <p>Total views: {views}</p>
              </div>

              {userGames && userGames.includes(game.name) ? (
                <button
                  onClick={() => this.handleRemove(game)}
                  className='zi-btn primary ghost '
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => this.handleClick(game)}
                  className='zi-btn primary ghost '
                >
                  Save
                </button>
              )}
            </div>
            <div className='zi-more' />
            <div className='zi-fieldset-content'>
              Welcome to the {game.name} detail page! Here you can view more
              stuff on this game! You can view the top streamers playing{' '}
              {game.name}, right now! Save {game.name} to your collection. Once
              saved you will then be able to interact with the community!
              <div>
                <br />
                {showMsg && (
                  <>
                    <p className='zi-note alert'>
                      <button
                        onClick={this.handleMsg}
                        className='zi-btn ghost mini auto warning'
                      >
                        X
                      </button>
                      <span> </span>
                      <span className='zi-note-type'>ALERT:</span> Streams will
                      not be able to take you anywhere - will be imbedding soon
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
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
        `}</style>
      </div>
    )
  }
}
