const express = require('express')
const app = express()

const hostname = '0.0.0.0'    // allows access from remote computers
const port = 3002

app.get('/', function (req, res) {
  res.send('WEB APPS!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/big',  (req, res) =>{
  res.send('<h1>Hello World!</h1>')
})
app.get('/world',  (req, res) =>{
  res.send('<h2> World is awesome!</h2>')
})
app.get('/earth',  (req, res) =>{
  res.send('<h3>Earth is the only planet with human beings!</h3>')
})
app.get('/sun',  (req, res) =>{
  res.send('<h4>Sun rises in the east and sets in the west!</h4>')
})

app.get('/greeting/:id',  (req, res) =>{
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

