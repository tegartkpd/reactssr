import React from 'react'
import { renderRoutes, matchRoutes } from 'react-router-config'
import Home from './components/Home'
import User, { loadData } from './components/User'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/user',
    component: User
  }
]

export const getInitialData = (path, store) => {
  return matchRoutes(routes, path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })
}

export default () => {
  return (
    <div>{renderRoutes(routes)}</div>
  )
}
