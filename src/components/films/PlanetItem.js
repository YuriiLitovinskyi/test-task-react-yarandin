import React from 'react';
import PropTypes from 'prop-types';

const PlanetItem = ({ planet }) => {
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
                </div>                                   
            </div>                  
        </div>       
    )
}

PlanetItem.propTypes = {
    planet: PropTypes.object.isRequired  
};

export default PlanetItem;



