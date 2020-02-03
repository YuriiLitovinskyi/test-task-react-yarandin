import { GET_FILMS, GET_SINGLE_FILM } from '../actions/Types';

const initialState = {
    films: [],
    singleFilm: {}  
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_FILMS:
            return {
                ...state,
                films: action.payload               
            };
        case GET_SINGLE_FILM:
            return {
                ...state,
                singleFilm: state.films.find(film => film.id === action.payload)
            };
        default:
            return state;
    }
}