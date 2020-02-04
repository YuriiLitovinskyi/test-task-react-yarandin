import React from 'react';

const StarshipItem = ({ starship }) => {
    return (        
        <div className="col s12 m12">                
            <div className="card blue-grey darken-2">
                <div className="card-content white-text center">                         
                    <span className="card-title">Starship Name: {starship.name}</span>
                    <p>Model: {starship.model}</p>
                    <p>Class: {starship.starship_class}</p>
                    <p>Max Speed: {starship.max_atmosphering_speed}</p>
                    <p>Crew: {starship.crew}</p>
                    <p>Passengers: {starship.passengers}</p>
                </div>                       
            </div>                  
        </div>
    )
}

export default StarshipItem;
