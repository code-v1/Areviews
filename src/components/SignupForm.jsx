import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userUtils from '../utils/user'

export default class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      pwComf: ''
    }
  }

  isFormValid = () => {
    return (
      this.state.username &&
      this.state.email &&
      this.state.password === this.state.pwComf
    )
  }

  handleChange = e => {
    const { updateMsg } = this.props
    const { name, value } = e.target
    updateMsg(null)
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async e => {
    const { history, handleSignupOrLogin, updateMsg } = this.props
    e.preventDefault()
    try {
      await userUtils.signup(this.state)
      handleSignupOrLogin()
      history.push('/home')
    } catch (err) {
      updateMsg(err.message)
    }
  }

  render() {
    return (
      <div>
        <h1>Hello Signup</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <span className='zi-label spans'>Username</span>
            <input
              type='text'
              name='username'
              value={this.state.username}
              placeholder='justtams'
              className='zi-input inputs'
              onChange={this.handleChange}
            />
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
            <span className='zi-label spans'>Confirm Password</span>
            <input
              type='password'
              name='pwComf'
              value={this.state.pwComf}
              placeholder='One more time'
              className='zi-input inputs'
              onChange={this.handleChange}
            />
            <br />
            <button
              className={
                this.isFormValid() ? 'zi-btn success ghost' : 'zi-btn disabled'
              }
            >
              Sign up
            </button>
            <Link to='/'>Cancel</Link>
          </form>
        </div>
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
      </div>
    )
  }
}
