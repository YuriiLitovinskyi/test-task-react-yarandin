import React from 'react';

const FilmItem = ({ film }) => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{film.title}</span>
                        <p>Episode {film.episode_id}</p>
                        <p>Director: {film.director}</p>
                        <p>Release date: {film.release_date}</p>
                    </div>
                    <div className="card-action">
                        <a href="!#">See Film Info</a>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmItem;
