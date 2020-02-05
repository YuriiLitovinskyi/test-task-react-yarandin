import React, { Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';
import FilmItem from './FilmItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFilms, sortAlphabetical } from '../../actions/FilmsActions';
import FilmFilter from './FilmFilter';


const Films = ({ films, filtered, getFilms, sortAlphabetical }) => {

    useEffect(() => {
        getFilms();        
        //eslint-disable-next-line
    }, [])

    if(films === undefined){
        return <Spinner />
    } else {
        return (
            <Fragment>
                <FilmFilter />
                <button className={filtered === null || filtered === undefined ? "waves-effect waves-light btn" : "hide"} onClick={() => {sortAlphabetical('asc')}}>Sort asc</button>
                <button className={filtered === null || filtered === undefined ? "waves-effect waves-light btn" : "hide"} onClick={() => {sortAlphabetical('desc')}}>Sort desc</button>
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
    filtered: PropTypes.array,   
    getFilms: PropTypes.func.isRequired,
    sortAlphabetical: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    films: state.films,
    filtered: state.filtered,
    sortType: state.sortType  
})

export default connect(mapStateToProps, { getFilms, sortAlphabetical })(Films);

