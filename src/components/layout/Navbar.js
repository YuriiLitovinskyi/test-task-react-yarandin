import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
    return (         
        <nav className="nav-wrapper blue-grey darken-3 nav">
            <div className="container">
                <a href="#!" className="brand-logo">{title}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>                
                </ul>
            </div>
        </nav>  
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired    
};

Navbar.defaultProps = {
    title: 'The Star Wars Films'    
};

export default Navbar;