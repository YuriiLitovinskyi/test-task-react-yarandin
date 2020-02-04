import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import StarshipItem from './StarshipItem';
import { getSingleFilm, getStarships,  getPlanets } from '../../actions/FilmsActions';

const Film = (props) => {
    const { films, singleFilm, starships, planets, getSingleFilm, getStarships,  getPlanets } = props;

    useEffect(() => {        
        getSingleFilm(films[Number(props.match.params.film_id)]);   
        console.log(props); 
        //eslint-disable-next-line
    }, []) 
    
    
    if(singleFilm === undefined || Object.entries(singleFilm).length === 0){  
        return <Spinner />
    } else {
        return (
            <div className="container center">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text center">
                            <span className="card-title">{singleFilm.title}</span>
                                <p>Episode {singleFilm.episode_id}</p>
                                <p>Director: {singleFilm.director}</p>
                                <p>Producers: {singleFilm.producer}</p>
                                <p>Release date: {singleFilm.release_date}</p>
                                <p>{singleFilm.opening_crawl}</p>
                                
                               
                                <br />
                                <button onClick={() => getPlanets(singleFilm.planets)}>Show Planets</button>
                                <ul>
                                    {planets !== undefined && planets.map((planet, index) => <li key={index}>{planet.name}</li> )}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <a onClick={() => getStarships(singleFilm.starships)} className="waves-effect waves-light btn">Show Starships</a>                              
                    {starships !== undefined && starships.map((starship, index) => <StarshipItem key={index} starship={starship} />)} 
            </div>  
        )
   } 
}

const mapStateToProps = (state) => ({
    singleFilm: state.singleFilm,
    films: state.films,
    starships: state.starships ,
    planets: state.planets
})

export default connect(mapStateToProps, { getSingleFilm, getStarships,  getPlanets })(Film);


