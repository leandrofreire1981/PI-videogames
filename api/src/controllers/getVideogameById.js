const axios = require('axios');
require('dotenv').config();
const { apiKey } = process.env;



const getVideogameById = async (id) => {
    const game = await axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`)
    //const game = await axios.get(`http://localhost:3003/games/${id}`)
    const videogame = {
        id: game.data.id,
        name: game.data.name,
        description: game.data.description,
        image: game.data.background_image,
        released: game.data.released,
        rating: game.data.rating,
        platforms: game.data.platforms.map(res => res.platform.name),
        genres: game.data.genres.map(res => res.name),
        created: false
    } 
    return videogame
    //return game.data

}

module.exports = getVideogameById;