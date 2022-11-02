const { Videogame, Genre, Platform } = require('../db')

const getVideogameDb = async (idGame = -1) => {
    let videogames = []
    if(idGame === -1){
    console.log('viene sin id', idGame)
        videogames = await Videogame.findAll({
            include: 
                
             [   
                {model: Genre,
                attributes: ['name']},
       
                {model: Platform,
                attributes: ['name']}
            ]
        })
    }
    else{
        console.log('viene con id', idGame)
        videogames = await Videogame.findAll({
            where: {id: '335fae5e-57d2-4fb5-aba1-2a4b1fcd45dd'},
            include: 

            [   
                {model: Genre,
                attributes: ['name']},
                    
                {model: Platform,
                attributes: ['name']}
            ]
        })
    }

        let VG = videogames.map(res => {
            return{
                id: res.id,
                name: res.name,
                description: res.description,
                realeased: res.realeased,
                rating: res.rating,
                created: res.created,
                image: 'https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/pass/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg',
                genres: res.Genres.map(res => res.name),
                platforms: res.Platforms.map(res => res.name)
            }
        })
        console.log('encontrado: ', VG)
        return VG

}

module.exports = getVideogameDb;