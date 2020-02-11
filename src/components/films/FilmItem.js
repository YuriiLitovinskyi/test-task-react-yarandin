import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FilmItem = ({ film, index }) => {
    return (
        <div className="row" style={stl}>
            <div className="col s12 m6" style={stl}>
                <Link to={`/${index}`}>
                    <div className="card blue-grey darken-2">
                        <div className="card-content white-text center">
                            <span className="card-title">{film.title}</span>
                            <p>Episode {film.episode_id}</p>
                            <p>Director: {film.director}</p>
                            <p>Release date: {film.release_date}</p>
                        </div>                       
                    </div>
                </Link>   
            </div>
        </div>
    )
}

FilmItem.propTypes = {
    film: PropTypes.object.isRequired,  
    index: PropTypes.number.isRequired  
};

export default FilmItem;

const stl = {
    float: 'none',
    marginLeft: 'auto',
    marginRight: 'auto'
}