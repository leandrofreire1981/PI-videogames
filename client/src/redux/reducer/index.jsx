import { useHistory } from "react-router-dom"
import { GET_GENRES, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_ID, GET_VIDEOGAMES_BY_NAME, SEARCH, SET_PAGES } from "../const"
import img from '../../img/error.jpg'


const initialState = {
    videogames: [],
    genres: [],
    findGames: [],
    gameDetail: {},
    pages: {
        start: 1,
        end: 15
    }
}

export default function rootReducer(state = initialState, action){
    switch(action.type){

        case GET_VIDEOGAMES:
            return {
                ...state, videogames: [...action.payload]
            }

        case GET_GENRES:
            return {
                ...state, genres: [...action.payload]
            }

        case SEARCH:
            return {
                ...state, findGames: action.payload
            }

        case GET_VIDEOGAMES_BY_ID:
            return {
                ...state, gameDetail: action.payload
            }

        default:
            return state;
    }
}