const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (request, response) => {

  if (request.query.name) { 
    return response.status(200).json({
      message: `Hello ${request.query.name}`
    })
  }

  return response.status(400).json({
    message: 'Required query param `name` is missing'
  })
  
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})