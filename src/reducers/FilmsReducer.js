import { GET_FILMS, GET_SINGLE_FILM, GET_STARSHIPS, GET_PLANETS, FILTERED_FILMS, CLEAR_FILTER } from '../actions/Types';

const initialState = {
    films: [],
    singleFilm: {},
    starships: [],
    planets: [],
    filtered: null  
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_FILMS:
            return {
                ...state,
                films: action.payload,
                singleFilm: {},
                starships: [],
                planets: []                              
            };
        case GET_SINGLE_FILM:
            return {
                ...state,
                singleFilm: action.payload,
                filtered: null       
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
            };
        case FILTERED_FILMS:
            return {
                ...state,
                filtered: state.films.filter(film => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return film.title.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        default:
            return state;
    }
}