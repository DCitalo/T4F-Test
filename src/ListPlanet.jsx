import React, { Component } from 'react';
import PlanetInfo from './PlanetInfo';

class ListPlanet extends Component {
	render() {
    	const planet = this.props.planet;
    	return (
    	  <div className="container-80">
    	    {
    	    	planet.map((p) =>{
    	    		return(
    	    			<div className="container-80 tb-container-100 unit-container DF FW" key={p.url}>
                            <div className="container-80">
                                <p className="planet-name Spectral">{p.name} </p>
                                <p className="planet-pop Mont">Population: <b>{p.population}</b></p>
                                <PlanetInfo planetInfo={p} />
                            </div>
                            <div className="container-20"><img src="Images/planet-icon.png" alt="Planet-Icon"/></div>
    	    			</div>
    	    		)
    	    	})	
    	    }
    	  </div>
    	);
  	}
}

export default ListPlanet;