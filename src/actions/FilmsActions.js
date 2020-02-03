import { GET_FILMS, GET_SINGLE_FILM } from './Types';

// GET all Films
export const getFilms = () => async (dispatch) => { 
   
    const responce = await fetch('https://swapi.co/api/films/');
    const films = await responce.json();
    console.log(films.results); 

    dispatch({
        type: GET_FILMS,
        payload: films.results
    })
}

// GET a single Film
export const getSingleFilm = (id) => (dispatch) => {
    dispatch({
        type: GET_SINGLE_FILM,
        payload: id
    })
}