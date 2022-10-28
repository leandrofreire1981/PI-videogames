import { GET_GENRES, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_ID, GET_VIDEOGAMES_BY_NAME, SEARCH } from "../const"

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

export function getVideogamesByName(name){

    return function(dispatch){
        fetch(`http://localhost:3001/videogames?name=${name}`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: SEARCH,
                    payload: res
                })
            }
            ).catch(error => console.log(error))
    }
}

export function getVideogameById(id){

    return function(dispatch){
        fetch(`http://localhost:3001/videogames/${id}`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: GET_VIDEOGAMES_BY_ID,
                    payload: res
                })
            })
            .catch(error => console.log(error))
    }
}