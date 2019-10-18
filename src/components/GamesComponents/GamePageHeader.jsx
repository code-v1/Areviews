import React, { Component } from 'react'
import tokenUtils from '../../utils/token'
import DB from '../../utils/db'

export default class GamePageHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMsg: true
    }
  }

  handleMsg = () => {
    this.setState({ showMsg: false })
  }

  handleClick = game => {
    DB.addGame(game).then(res => console.log(res.json))
  }

  render() {
    const { game, views } = this.props
    const { showMsg } = this.state

    console.log(game)
    console.log(tokenUtils.getToken())
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
                <h1>Fortnite</h1>
                <p>Total views: {views}</p>
              </div>

              <button
                onClick={() => this.handleClick(game)}
                className='zi-btn primary ghost '
              >
                Save
              </button>
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
