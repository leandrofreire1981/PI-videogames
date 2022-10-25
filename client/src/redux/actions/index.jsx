import { GET_VIDEOGAMES } from "../const"

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
    }

}