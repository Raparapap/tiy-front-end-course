var express = require('express')
var app = express()
 
app.get('/', function (request, response) {
  response.send('<h1>Hello World</h1>')
})

app.get('/message', function (request, response) {
  response.send('holaaaa')
})

app.post('/message', function (request, response) {
  response.send('harooooo')
})
 
app.listen(3000)



// app.get('/' - this is the end point 'root', function (request, response) {
//   response.send('Hello World')
// })