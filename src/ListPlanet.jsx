import React, { Component } from 'react';

class ListPlanet extends Component {
	render() {
    	const Setor = this.props.ShowSet;
    	return (
    	  <div className="container-80">
    	    {
    	    	Setor.map((p) =>{
    	    		return(
    	    			<div className="container-80 tb-container-100 unit-container DF FW" key={p.url}>
                            <div className="container-80">
                                <p >{p.Nome} </p>
                            </div>
    	    			</div>
    	    		)
    	    	})	
    	    }
    	  </div>
    	);
  	}
}

export default ListPlanet;