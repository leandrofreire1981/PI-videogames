const { Videogame, Genre, Platform } = require('../db')

const getVideogameDb = async () => {
        let videogames = await Videogame.findAll({
            include: 
                
             [   
                {model: Genre,
                attributes: ['name']},
       
                {model: Platform,
                attributes: ['name']}
            ]
        })

        let VG = videogames.map(res => {
            return{
                id: res.id,
                name: res.name,
                description: res.description,
                realeased: res.realeased,
                rating: res.rating,
                created: res.created,
                genres: res.Genres.map(res => res.name),
                platforms: res.Platforms.map(res => res.name)
            }
        })
        return VG

}

module.exports = getVideogameDb;