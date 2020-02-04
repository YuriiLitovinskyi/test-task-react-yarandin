import { GET_FILMS, GET_SINGLE_FILM, GET_STARSHIPS, GET_PLANETS } from './Types';

export const getFilms = () => async (dispatch) => { 
   
    const responce = await fetch('https://swapi.co/api/films/');
    const films = await responce.json();
    console.log(films.results); 

    dispatch({
        type: GET_FILMS,
        payload: films.results
    })
}

export const getSingleFilm = (film) => async (dispatch) => {

    const responce = await fetch(`${film.url}`);
    const singleFilm = await responce.json();
    console.log(singleFilm); 

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
    console.log(starships)

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
    console.log(planets)

    dispatch({
        type: GET_PLANETS,
        payload: planets
    })
}