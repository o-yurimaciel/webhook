const express = require('express')
const app = express()
const port = process.env.PORT || 5050
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send("Up!")
})

app.post('/webhook', (req, res) => {
  console.log('Web hook received!')
  console.log(req.body)
  res.send("Ok")
})

app.listen(port, () => {
  console.log('listening on ', port)
})