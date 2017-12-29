import React from 'react'
import serialize from 'serialize-javascript'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import renderRoutes from '../Routes'

export default (path, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={{}} >
        {renderRoutes(path)}
      </StaticRouter>
    </Provider>
  )

  return (
    `<html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script>window.INITIAL_STATE=${serialize(store.getState())}</script>
      <script src='bundle.js'></script>
    </body>
    </html>`
  )
}
