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
   
    const responce = await fetch('https://swapi.co/api/films/');
    const films = await responce.json();
    //console.log(films.results); 

    dispatch({
        type: GET_FILMS,
        payload: films.results
    })
}

export const getSingleFilm = (film) => async (dispatch) => {

    const responce = await fetch(`${film.url}`);
    const singleFilm = await responce.json();
    //console.log(singleFilm); 

    dispatch({
        type: GET_SINGLE_FILM,
        payload: singleFilm
    })
}

export const getStarships = (arrayOfStarsips) => async (dispatch) => {   

    let starships = await Promise.all(
        arrayOfStarsips.map(async shipUrl => {
            let shipResponse = await fetch(shipUrl)
            return shipResponse.json()
        })
    )
    //console.log(starships)

    dispatch({
        type: GET_STARSHIPS,
        payload: starships
    })
}

export const getPlanets = (arrayOfPlanets) => async (dispatch) => {

    let planets = await Promise.all(
        arrayOfPlanets.map(async planetUrl => {
            let planetResponse = await fetch(planetUrl)
            return planetResponse.json()
        })
    )
    //console.log(planets)

    dispatch({
        type: GET_PLANETS,
        payload: planets
    })
}

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

    let starshipFilms = await Promise.all(
        arrayOfStarhipFilms.map(async shipFilmUrl => {
            let shipFilmResponse = await fetch(shipFilmUrl)
            return shipFilmResponse.json()
        })
    )
    //console.log(starshipFilms)
    let newItem = {
            number: indexSth,
            item: starshipFilms
        }
    
   // console.log(newItem)

    dispatch({
        type: GET_STARSHIP_FILMS,
        payload:  newItem
    })
}

export const getPlanetFilms = (arrayOfPlanetFilms, indexSth) => async (dispatch) => {

    let planetFilms = await Promise.all(
        arrayOfPlanetFilms.map(async planetFilmUrl => {
            let planetFilmResponse = await fetch(planetFilmUrl)
            return planetFilmResponse.json()
        })
    )
    //console.log(planetFilms)
    let newItem = {
            number: indexSth,
            item: planetFilms
        }
    
    //console.log(newItem)  

    dispatch({
        type: GET_PLANET_FILMS,
        payload:  newItem
    })
}