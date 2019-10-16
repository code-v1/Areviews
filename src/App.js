import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'
import userUtils from './utils/user'
import '@zeit-ui/style'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: userUtils.getUser()
    }
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userUtils.getUser() })
  }

  handleLogout = () => {
    userUtils.logout()
    this.setState({ user: null })
  }

  render() {
    return (
      <>
        <header className='zi-card'>
          <h1>W I L C O</h1>
          <nav>
            <Link to='signup'>Signup</Link>
          </nav>
        </header>
        <main className='zi-main'>
          <section className='zi-layout'>
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <Home
                    handleSignupOrLogin={this.handleSignupOrLogin}
                    user={this.state.user}
                  />
                )}
              />
              <Route
                exact
                path='/signup'
                render={({ history }) => (
                  <Signup
                    handleSignupOrLogin={this.handleSignupOrLogin}
                    history={history}
                  />
                )}
              />
            </Switch>
          </section>
        </main>
        <style>{`
          header { 
            display: flex;
           } 

           header h1 {
             justify-content: flex-start;
           }

           header nav {
             justify-content: flex-end;
           }
        `}</style>
      </>
    )
  }
}

export default App
