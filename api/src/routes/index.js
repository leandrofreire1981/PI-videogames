const { Router } = require('express');
const getGenres = require('../controllers/getGenres')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideogames = require('../controllers/getVideogames');
const getVideogameById = require('../controllers/getVideogameById');
const getVideogameByName = require('../controllers/getVideogamesByName')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', async (req, res) => {
    try{
        const videogames = await getVideogames();
        res.status(200).json(videogames)
    }catch(error) {
        res.status(404).send(error.message)
    }
});

router.get('/videogames/:idVideogames', async (req, res) => {
    const id = req.params.idVideogames;
    try{
        const videogame = await getVideogameById(id);
        res.status(200).json(videogame)
    }catch(error){
        res.status(404).send(error.message)
    }
}) 

router.get('/videogames', async(req, res) => {
    const { name } = req.query;
    try {
        const videogames = await getVideogameByName(name);
        res.status(200).json(videogames)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/genres', async (req, res) => {
    try {
        const genres = await getGenres()
        res.status(200).json(genres)
    } catch (error) {
        res.status(404).send(error.message)
    }
})



module.exports = router;
