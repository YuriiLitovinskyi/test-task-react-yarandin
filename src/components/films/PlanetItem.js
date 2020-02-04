import React from 'react';

const PlanetItem = ({ planet }) => {
    return (
        <div className="row">
            <div className="col s12 m12">                
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text center">                         
                            <span className="card-title">Name: {planet.name}</span>
                            <p>Climat: {planet.climate}</p>
                            <p>Gravity: {planet.gravity}</p>
                            <p>Max Speed: {starship.max_atmosphering_speed}</p>
                            <p>Crew: {starship.crew}</p>
                            <p>Passengers: {starship.passengers}</p>
                        </div>                       
                    </div>                  
            </div>
        </div>
    )
}

export default PlanetItem;
