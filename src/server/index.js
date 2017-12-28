import express from 'express'
import serverRender from './serverRender'

const app = express()
const port = '3000'

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(serverRender())
})

app.listen(port, () => {
  console.log('Listening to port ' + port)
})
