import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStarshipFilms } from '../../actions/FilmsActions';

const StarshipItem = ({ starship, indexSth, starshipFilms, getStarshipFilms }) => {
    return (        
        <div className="col s12 m12">                
            <div className="card blue-grey darken-2">
                <div className="card-content white-text center">                         
                    <span className="card-title">Starship Name: {starship.name}</span>
                    <p>Model: {starship.model}</p>
                    <p>Class: {starship.starship_class}</p>
                    <p>Max Speed: {starship.max_atmosphering_speed}</p>
                    <p>Crew: {starship.crew}</p>
                    <p>Passengers: {starship.passengers}</p>

                    <button onClick={() => getStarshipFilms(starship.films, indexSth)} className="waves-effect waves-light btn">Show Films</button>
                    {(starshipFilms !== undefined && starshipFilms.number === indexSth) ? starshipFilms.item.map((film, index) => <p key={index}>{film.title}</p>) : null}
                </div>                       
            </div>                  
        </div>
    )
}

StarshipItem.propTypes = {
    starship: PropTypes.object.isRequired,
    indexSth: PropTypes.number.isRequired,
    starshipFilms: PropTypes.object,
    getStarshipFilms: PropTypes.func.isRequired  
};

const mapStateToProps = (state) => ({
    starshipFilms: state.starshipFilms
})

export default connect(mapStateToProps, { getStarshipFilms })(StarshipItem);
