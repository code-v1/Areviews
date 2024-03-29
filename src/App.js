import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Home from './pages/Home'
import TopGames from './pages/TopGames'
import PrivateRoute from './components/PrivateRoute'
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
        <Nav user={this.state.user} handleLogout={this.handleLogout} />
        <main className='zi-main'>
          <section className='zi-layout'>
            <Switch>
              <PrivateRoute
                user={this.state.user}
                component={Home}
                path='/home'
              />
              <PrivateRoute
                user={this.state.user}
                component={TopGames}
                path='/top-games'
              />
              <Route
                exact
                path='/'
                render={({ history }) => (
                  <Landing
                    handleSignupOrLogin={this.handleSignupOrLogin}
                    history={history}
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
              <Route
                exact
                path='/login'
                render={({ history }) => (
                  <Login
                    handleSignupOrLogin={this.handleSignupOrLogin}
                    history={history}
                  />
                )}
              />
            </Switch>
          </section>
        </main>
      </>
    )
  }
}

export default App
