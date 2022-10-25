const axios = require('axios')
require('dotenv').config();
const { apiKey } = process.env;


const getGenres = async () => {
    //const genres = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`)
    //let gen = genres.data.results.map(res => res)
    const gen = await axios.get('http://localhost:3003/genres')
    return gen.data
}

module.exports = getGenres;