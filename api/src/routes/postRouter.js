const express = require('express');

const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
    try {
        const game = await postVideogame(req.body)
        res.status(200).json(game)
    } catch (error) {
       res.status(400).send('error.message') 
    }
});

module.exports = postRouter;