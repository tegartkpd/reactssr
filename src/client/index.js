import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderRoutes from '../Routes'
import { createClientStore } from '../store/createStore'

ReactDom.hydrate(
  <Provider store={createClientStore(window.INITIAL_STATE)}>
    <BrowserRouter>
      {renderRoutes()}
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root')
)
