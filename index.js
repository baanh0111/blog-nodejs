const express = require('express')
const app = express()
const port = 3000

app.get('/hihi', (req, res) => {
  res.send('Hello Worldhthrhtrhtrhtrhte!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})