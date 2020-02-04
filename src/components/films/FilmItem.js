import React from 'react';
import { Link } from 'react-router-dom';

const FilmItem = ({ film, index }) => {
    return (
        <div className="row">
            <div className="col s12 m12"  style={{ padding: '0 250px', margin: 'auto', display: 'block' }} >
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

export default FilmItem;
