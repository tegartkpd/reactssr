import 'babel-polyfill'
import express from 'express'
import serverRender from './serverRender'
import createStore from '../store/createStore'
import { getInitialData } from '../Routes'

const app = express()
const port = '3000'
const data = [
  { id: 1, name: 'data 1' },
  { id: 2, name: 'data 2' }
]

app.use(express.static('public'))

app.get('/api/data', (req, res) => {
  res.send(data).status(200)
})

app.get('*', (req, res) => {
  const store = createStore()
  const path = req.path
  const promises = getInitialData(path, store)

  Promise.all(promises).then(() => {
    res.send(serverRender(path, store))
  })
})

app.listen(port, () => {
  console.log('Listening to port ' + port)
})
