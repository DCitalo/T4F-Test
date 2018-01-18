import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
var jsonData = require('./band');

class Header extends Component {
	render() {
        const BandName  = jsonData.NomeBanda;
        const NomeShow  = jsonData.NomeShow;
    	return (
    	<header id='header' className='paralax header header-home' >
      <div className='container header-content'>
          <span className='header-subtitle font-third font-weight-light color-main wow zoomIn'></span>
          <ul className='text-center container-60 center'>
            <li className='container-100 content-header HeaderBandLogo'><h1>{BandName}</h1><img src='Images/logo.png' alt='Deep Purple' /></li>
            <li className='container-100 content-header HeaderShowLogo'><h2>{NomeShow}</h2><img src='Images/logo_title.png' alt='InFinite Tour' /></li>
            <li className='content-header container-100'><Scrollchor to="#Tickets" className='buy'><i className='fas fa-chevron-down'></i>Compre Agora!</Scrollchor></li>
          </ul>
      </div>
    </header>
    );
  	}
}

export default Header;