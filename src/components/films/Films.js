import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import FilmItem from './FilmItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFilms } from '../../actions/FilmsActions';

const Films = ({ films, getFilms }) => {

    useEffect(() => {
        getFilms();
        //eslint-disable-next-line
    }, [])


    if(films === undefined){
        return <Spinner />
    } else {
        return (
            <div>
                {films.map((film, index) => <FilmItem film={film} index={index} key={film.episode_id} />
                )}
            </div>
        )
    } 
  
};

Films.propTypes = {
    films: PropTypes.array,   
    getFilms: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    films: state.films  
})

export default connect(mapStateToProps, { getFilms })(Films);

