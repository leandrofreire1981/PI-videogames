import { ALPHA_ORDER, GET_VIDEOGAMES } from "../const"

const initialState = {
    videogames: [],
    genres: {}
}

export default function rootReducer(state = initialState, action){
    switch(action.type){

        case GET_VIDEOGAMES:
            return {
                ...state, videogames: [...action.payload]
            }
        
        case ALPHA_ORDER:
            return {
                ...state, videogames: [...action.payload]
            }

        default:
            return state;
    }
}