import React, { Component } from 'react';
import axios from 'axios';

class PlanetInfo extends Component {
	constructor(props){
    super(props);
    
    this.state = {
      expanded: false,
      Movies:[],
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
	}

	open(){
		this.setState({expanded: !this.state.expanded })
	}

	close(){
	  	this.setState({expanded: !this.state.expanded })
	  }
	getFilms(){
	  	const info = this.props.planetInfo;
	  	var rows=[];
	    for (var i = 0; i < info.films.length; i++) {
		    axios.get(info.films[i])
		    .then((result) => {
		    	var Item = (<li className="container-detail cont-movie"><b className="detail-info">{result.data.title}</b></li>)
		    	rows.push(Item);
		    });
	    }
	    this.setState({Movies: rows})
	}
	componentDidMount(){
	  this.getFilms();
	}
  	render() {
		const info = this.props.planetInfo;
    	const {Movies} = this.state;

		if(!this.state.expanded){
			return <p className="info-button show-info" onClick={this.open}>Show info</p>
		}
		return(
			<div>
				<p className="info-button hide-info" onClick={this.close}>Hide info</p>
				<ul className="planet-detail">
					<li className="container-detail"><p>Diameter: <b className="detail-info">{info.diameter}</b></p></li>
					<li className="container-detail"><p>Climate: <b className="detail-info">{info.climate}</b></p></li>
					<li className="container-detail"><p>Gravity: <b className="detail-info">{info.gravity}</b></p></li>
					<li><ul><p>Films:</p> {Movies}</ul></li>
				</ul>
			</div>
		);
  	}
}

export default PlanetInfo;