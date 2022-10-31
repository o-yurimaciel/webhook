const express = require('express')
const app = express()
const port = process.env.PORT || 5050
const cors = require('cors')

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send("Up!")
})

app.get('/webhook', (req, res) => {
  console.log(req)
  res.send("Ok!")
})

app.listen(port, () => {
  console.log('listening on ', port)
})