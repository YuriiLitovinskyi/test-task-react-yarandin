import React, { Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';
import FilmItem from './FilmItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFilms } from '../../actions/FilmsActions';
import FilmFilter from './FilmFilter';


const Films = ({ films, filtered, getFilms }) => {

    useEffect(() => {
        getFilms();
        console.log(filtered)
        //eslint-disable-next-line
    }, [])


    if(films === undefined){
        return <Spinner />
    } else {
        return (
            <Fragment>
                <FilmFilter />
                <TransitionGroup>
                    {
                        filtered !== undefined && filtered !== null ? 
                            filtered.map((film, index) => (
                                <CSSTransition key={film.episode_id} timeout={500} classNames="item">
                                    <FilmItem film={film} index={index} />
                                </CSSTransition>                                
                        )) :
                            films.map((film, index) => (
                                <CSSTransition key={film.episode_id} timeout={500} classNames="item">
                                    <FilmItem film={film} index={index} key={film.episode_id}  />
                                </CSSTransition>                                
                        )) 
                    }  
                </TransitionGroup>                           
            </Fragment>
        )
    } 
  
};

Films.propTypes = {
    films: PropTypes.array,   
    getFilms: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    films: state.films,
    filtered: state.filtered  
})

export default connect(mapStateToProps, { getFilms })(Films);

