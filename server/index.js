const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const Home = require('./src/Home').default
const app = express()

const port = '3000'

app.listen(port, () => {
  console.log('Listening to port ' + port)
})

app.get('/', (req, res) => {
  const content = renderToString(<Home />)
  res.send(content)
})
