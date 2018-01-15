import React, { Component } from 'react';
import axios from 'axios';

class CharInfo extends Component {
	constructor(props){
    super(props);
    
    this.state = {
      expanded: false,
      HomePlanet:[],
      Movies:[],
    }

    this.getHomePlanetInfo = this.getHomePlanetInfo.bind(this);
    this.getFilms = this.getFilms.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

	getHomePlanet(){
	  	const info = this.props.charInfo;
	    return axios.get(info.homeworld)
	    .then((result) => {
      		this.setState({HomePlanet: result.data.name})
	    });
	}
	getHomePlanetInfo(){
	  	const info = this.props.charInfo;
	    return axios.get(info.homeworld)
	    .then((result) => {
	    	
	    });
	}
	getFilms(){
	  	const info = this.props.charInfo;
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
    this.getHomePlanet();
    this.getFilms();
    this.getHomePlanetInfo();
  }
  open(){
  	this.setState({expanded: !this.state.expanded })
  }

  close(){
  	this.setState({expanded: !this.state.expanded })
  }

	render() {
		const info = this.props.charInfo;
    	const {HomePlanet} = this.state;
    	const {Movies} = this.state;

		if(!this.state.expanded){
			return <p className="info-button show-info" onClick={this.open}>Show info</p>
		}
			return(
				<div className="user-detail" >
					<p className="info-button hide-info" onClick={this.close}>Hide info</p>
					<ul>
						<li className="container-detail"><p>Gender: <b className="detail-info">{info.gender}</b></p></li>
						<li className="container-detail"><p>Birth Date: <b className="detail-info">{info.birth_year}</b></p></li>
						<li className="container-detail"><p>Hair Color: <b className="detail-info">{info.hair_color}</b></p></li>
						<li className="container-detail"><p>Skin Color: <b className="detail-info">{info.skin_color}</b></p></li>
						<li className="container-detail"><p>Homeworld: <b className="detail-info">{HomePlanet}</b></p></li>
						<li><ul><p>Movies:</p> {Movies}</ul></li>
					</ul>
				</div>
			)
  	}
}

export default CharInfo;