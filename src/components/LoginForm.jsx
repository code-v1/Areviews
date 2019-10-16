import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userUtils from '../utils/user'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async e => {
    const { handleSignupOrLogin, history, updateMsg } = this.props
    e.preventDefault()
    try {
      await userUtils.login(this.state)
      handleSignupOrLogin()
      history.push('/home')
    } catch (err) {
      console.log(err)
      updateMsg(err.message)
    }
  }

  isFormValid() {
    return this.state.email && this.state.password
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <span className='zi-label spans'>Email</span>
          <input
            type='email'
            name='email'
            value={this.state.email}
            placeholder='janho@eee.com'
            className='zi-input inputs'
            onChange={this.handleChange}
          />
          <span className='zi-label spans'>Password</span>
          <input
            type='password'
            name='password'
            value={this.state.password}
            placeholder="Shhh it's a secret"
            className='zi-input inputs'
            onChange={this.handleChange}
          />
          <button
            className={
              this.isFormValid() ? 'zi-btn success ghost' : 'zi-btn disabled'
            }
          >
            Login
          </button>
          <Link to='/'>Cancel</Link>
          <style>{`
          form {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;
          }
          .inputs {
            width: 80%;
            margin-bottom: 10px;
          }
          `}</style>
        </form>
      </div>
    )
  }
}
