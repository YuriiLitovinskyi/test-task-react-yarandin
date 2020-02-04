import { GET_FILMS, GET_SINGLE_FILM, GET_STARSHIPS, GET_PLANETS } from '../actions/Types';

const initialState = {
    films: [],
    singleFilm: {},
    starships: [],
    planets: []  
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_FILMS:
            return {
                ...state,
                films: action.payload,
                singleFilm: {}               
            };
        case GET_SINGLE_FILM:
            return {
                ...state,
                singleFilm: action.payload       
            };
        case GET_STARSHIPS: 
            return {
                ...state,
                starships: action.payload
            };
        case GET_PLANETS:
            return {
                ...state,
                planets: action.payload
            }
        default:
            return state;
    }
}