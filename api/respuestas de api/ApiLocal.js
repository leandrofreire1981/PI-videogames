let express = require('express')
let fs = require('fs')
const games = require('./100games')
const g3328 = require('./g3328')
const g3498 = require('./g3498')
const genres = require('./genres')
const simpsons = require('./simpsons')

let app = express()

let puerto = 3003
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  app.get('/games', (req, res) => {
    try{
        res.status(200).json(games())
    }catch(error){
        res.status(404).send(error.message)
    }
  })

  app.get('/games/:id', (req, res) => {
    try {
      if(req.params.id == 3328)
        res.status(200).json(g3328())
      else
        res.status(200).json(g3498())
    } catch (error) {
      res.status(404).send(error.message)
    }
  })

  app.get('/genres', (req, res) => {
    try {
      res.status(200).json(genres())
    } catch (error) {
      res.status(404).send(error.message)
    }
  })

  app.get('/videogames', (req, res) => {
    try {
      res.status(200).json(simpsons())
    } catch (error) {
      res.status(404).send(error.message)
    }
  })

app.listen(puerto, () => {
    console.log(`Escuchando api local en puerto: ${puerto}`)
})