import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filteredFilms, clearFilter } from '../../actions/FilmsActions';

const FilmFilter = ({ filtered, filteredFilms, clearFilter }) => {

    const text = useRef('');

    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
    })

    const onChange = (e) => {
        if(text.current.value !== ''){
            filteredFilms(e.target.value);
        } else {
            clearFilter();
        }
    }

    return (
        <form className="input">
            <input ref={text}  placeholder="Search a Film by Name..." onChange={onChange}/>            
        </form>
    )
}

FilmFilter.propTypes = {      
    filtered: PropTypes.array,   
    filteredFilms: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({   
    filtered: state.filtered  
});

export default connect(mapStateToProps, { filteredFilms, clearFilter })(FilmFilter);