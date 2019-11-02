import React, { Component } from 'react'
import config from '../utils/db'
import axios from 'axios'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedGames: [],
      commentsMade: []
    }
  }

  componentDidMount = () => {
    return axios
      .get('/api/games', config)
      .then(res => {
        this.setState({
          savedGames: res.data.favGames
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { user } = this.props
    console.log(this.props)
    const { savedGames } = this.state
    return (
      <>
        <div className='zi-fieldset'>
          <div className='zi-fieldset-content'>
            <h1>{user.username}'s profile page</h1>
          </div>
          <div className='zi-fieldset-footer'>
            <p>total games saved: {savedGames.length}</p>
            <p>total comments made:</p>
          </div>
        </div>
      </>
    )
  }
}
