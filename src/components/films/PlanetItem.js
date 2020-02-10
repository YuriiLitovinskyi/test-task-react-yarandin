import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlanetFilms } from '../../actions/FilmsActions';

const PlanetItem = ({ planet, indexPln, planetFilms, getPlanetFilms }) => {
    return (       
        <div className="col s12 m12">                
            <div className="card blue-grey darken-2">
                <div className="card-content white-text center">                         
                    <span className="card-title">Planet Name: {planet.name}</span>
                    <p>Climat: {planet.climate}</p>
                    <p>Gravity: {planet.gravity}</p>
                    <p>Population: {planet.population}</p>
                    <p>Diameter: {planet.diameter}</p>
                    <p>Terrain: {planet.terrain}</p> 

                    <button onClick={() => getPlanetFilms(planet.films, indexPln)} className="waves-effect waves-light btn">Show Films</button>
                    {(planetFilms !== undefined && planetFilms.number === indexPln) ? planetFilms.item.map((film, index) => <p key={index}>{film.title}</p>) : null}                           
                </div>                                   
            </div>                  
        </div>       
    )
}

PlanetItem.propTypes = {
    planet: PropTypes.object.isRequired,
    indexPln: PropTypes.number.isRequired,
    planetFilms: PropTypes.object,
    getPlanetFilms: PropTypes.func.isRequired   
};


const mapStateToProps = (state) => ({
    planetFilms: state.planetFilms
})

export default connect(mapStateToProps, { getPlanetFilms })(PlanetItem);



