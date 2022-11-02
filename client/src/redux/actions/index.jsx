import { GET_GENRES, GET_PLATFORMS, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_ID, SEARCH } from "../const"

export function getVideogames(){

    return function(dispatch){
        fetch('http://localhost:3001/videogames')
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: GET_VIDEOGAMES,
                    payload: res
                })
            })
            .catch(error => error)
    }
}

export function getGenres(){

    return function(dispatch){
        fetch('http://localhost:3001/genres')
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: GET_GENRES,
                    payload: res
                })
            })
            .catch(error => error)
    }
}

export function getVideogamesByName(name, gamesFindedDb){
    
    return function(dispatch){
        fetch(`http://localhost:3001/videogames?name=${name}`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: SEARCH,
                    payload: [...gamesFindedDb, ...res]
                })
            }
            ).catch(error => error)
    }
}

export function getVideogameById(id){

    return function(dispatch){
        fetch(`http://localhost:3001/videogames/${id}`)
            .then(res => res.json())
            .then(res => {
                console.log('actions: ', res)
                dispatch({
                    type: GET_VIDEOGAMES_BY_ID,
                    payload: res
                })
            })
            .catch(error => error)
    }
}

export function getPlatforms(){

    return function(dispatch){
        fetch('http://localhost:3001/platforms')
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: GET_PLATFORMS,
                    payload: res
                })
            })
    }
}

export function postVideogame(game){

    fetch(`http://localhost:3001/post`, {
        method: 'POST',
        body: JSON.stringify(game),
        headers: {
            'Content-Type': 'application/json'
            }
    })
       .then(res => res.json())
        .catch(error =>error)
        .then(res => res)
        alert('Videogame creado con exito')

}
