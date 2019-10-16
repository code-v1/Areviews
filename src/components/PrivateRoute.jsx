import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({
  user,
  path,
  component: Component,
  ...rest
}) {
  return (
    <Route
      path={path}
      render={props =>
        user ? (
          <Component user={user} {...props} {...rest} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  )
}
