const axios = require('axios');
require('dotenv').config();
const { apiKey } = process.env;

const getVideogameByName = async (name) => {
    //const videogames = await axios.get(`https://api.rawg.io/api/games?search=${name}`);
    const videogames = await axios.get('http://localhost:3003/simpsons');
    return videogames.data;
}

module.exports = getVideogameByName;