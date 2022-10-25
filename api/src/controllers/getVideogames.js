const axios = require('axios');
require('dotenv').config();
const { apiKey } = process.env;


const getVideogames = async () => {
    let games = [];
    let videogames = [];

    games = await axios.get('http://localhost:3003/games')
    games = [...games.data.results]  
   

    //Con promesas
/*   games = await Promise.all([
        axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=${1}`),
        axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=${2}`),
        axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=${3}`),
        axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=${4}`),
        axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page=${5}`)
    ]); 
    games = games.map(res => res.data.results).flat()  */


  

     games.map(game => {
        videogames.push({
            id: game.id,
            name: game.name,
            image: game.background_image,
            genres: game.genres,
            created: false
        })
    })   



   return videogames;
}

module.exports =  getVideogames;



