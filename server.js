const express = require('express')
//reference to express package =>> require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('Hello World')
})

app.listen(3000)
