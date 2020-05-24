import { 
    GET_FILMS, 
    GET_SINGLE_FILM, 
    GET_STARSHIPS, 
    GET_PLANETS, 
    FILTERED_FILMS, 
    CLEAR_FILTER,     
    SORT, 
    GET_STARSHIP_FILMS, 
    GET_PLANET_FILMS } from './Types';

export const getFilms = () => async (dispatch) => { 

    try {
        const responce = await fetch('https://swapi.dev/api/films/');
        const films = await responce.json();         
    
        dispatch({
            type: GET_FILMS,
            payload: films.results
        });        
    } catch (error) {
        console.error(error);
    }   
};

export const getSingleFilm = (film) => async (dispatch) => {

    const filmUrl = film.url.replace(/^http?\//i, "https");

    try {
        const responce = await fetch(`${filmUrl}`);
        const singleFilm = await responce.json();         
    
        dispatch({
            type: GET_SINGLE_FILM,
            payload: singleFilm
        });        
    } catch (error) {
        console.error(error);
    }
};

export const getStarships = (arrayOfStarsips) => async (dispatch) => { 
    
    try {
        let starships = await Promise.all(
            arrayOfStarsips.map(async shipUrl => {
                let shipResponse = await fetch(shipUrl)
                return shipResponse.json()
            })
        )        
    
        dispatch({
            type: GET_STARSHIPS,
            payload: starships
        });        
    } catch (error) {
        console.error(error);
    }
};

export const getPlanets = (arrayOfPlanets) => async (dispatch) => {

    try {
        let planets = await Promise.all(
            arrayOfPlanets.map(async planetUrl => {
                let planetResponse = await fetch(planetUrl)
                return planetResponse.json()
            })
        )        
    
        dispatch({
            type: GET_PLANETS,
            payload: planets
        });        
    } catch (error) {
        console.error(error);
    }
};

export const filteredFilms = (text) => (dispatch) => {

    dispatch({
        type: FILTERED_FILMS,
        payload: text
    })
}

export const clearFilter = () => (dispatch) => {

    dispatch({
        type: CLEAR_FILTER
    })
}

export const sortAlphabetical = (type) => (dispatch) => {  

    dispatch({
        type: SORT,
        payload: type
    })
}

export const getStarshipFilms = (arrayOfStarhipFilms, indexSth) => async (dispatch) => {

    try {
        let starshipFilms = await Promise.all(
            arrayOfStarhipFilms.map(async shipFilmUrl => {
                let shipFilmResponse = await fetch(shipFilmUrl)
                return shipFilmResponse.json()
            })
        )        
        let newItem = {
                number: indexSth,
                item: starshipFilms
            }       
      
        dispatch({
            type: GET_STARSHIP_FILMS,
            payload:  newItem
        });        
    } catch (error) {
        console.error(error);
    }
};

export const getPlanetFilms = (arrayOfPlanetFilms, indexSth) => async (dispatch) => {

    try {
        let planetFilms = await Promise.all(
            arrayOfPlanetFilms.map(async planetFilmUrl => {
                let planetFilmResponse = await fetch(planetFilmUrl)
                return planetFilmResponse.json()
            })
        )    
        let newItem = {
                number: indexSth,
                item: planetFilms
            }        
      
        dispatch({
            type: GET_PLANET_FILMS,
            payload:  newItem
        });        
    } catch (error) {
        console.error(error);
    }
};