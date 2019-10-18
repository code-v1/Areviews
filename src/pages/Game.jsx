import React, { Component } from 'react'
import Card from '../components/GamesComponents/Card'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: null
    }
  }

  componentDidMount() {
    const { game } = this.props.location.state
    this.setState({
      game
    })
  }

  render() {
    const { game } = this.state
    return (
      <>
        {this.state.game && (
          <>
            <h1> {game.name} game page!</h1>
            <div className='zi-fieldset card-container'>
              <div className='card-img-badge'>
                <img src={game.box_art_url} alt='' className='zi-avatar huge' />
                <h5>{game.name}</h5>
              </div>
              <div className='zi-fieldset-content'>
                Welcome to the {game.name} detail page! Here you can view more
                stuff on this game! You can view the top streamers playing{' '}
                {game.name}, right now! Save {game.name} to your collection.
                Once saved you will then be able to interact with the community!
                <div>
                  <br />
                  <div className='zi-more' />
                  <br />
                  <div className='zi-caption'>
                    <button className='zi-btn'>Save Game</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <style>{`
          .card-container {
            display: flex;
          }

          .card-img-badge {
            margin: 1rem;
          }

          .welcome-tag {
           margin-right: 10rem;
          }
        `}</style>
      </>
    )
  }
}
