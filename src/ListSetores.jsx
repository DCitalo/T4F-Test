import React, { Component } from 'react';
var jsonData = require('./band');

class ListSetores extends Component {
	render() {
    	const ShowSet   = this.props.ShowSet["0"];
        const BandName  = jsonData.NomeBanda;
        const ShowLocal = jsonData.Local;
        const NomeShow  = jsonData.NomeShow;
        const DataShow  = jsonData.Data;
    	return (
    	  <div className='container-80 DF FW'>
    	    {
    	    	ShowSet.map((p) =>{
    	    		return(
    	    			<div className='container-50 tb-container-100 unit-container DF FW' key={p.id}>
                            <div className='ticket'> 
                               <div className='top'>
                                  <div className='bandname -bold'>{BandName}</div>
                                  <div className='tourname'>{NomeShow}</div>
                                  <img src='Images/bg_intro_desktop.jpg' alt='' />
                                  <div className='deetz'>
                                     <div className='event'>
                                        <div className='date'>{DataShow}</div>
                                        <div className='location -bold'>{ShowLocal}</div>
                                     </div>
                                     <div className='price '>
                                        <div className='label'>Preço</div>
                                        <div className='cost -bold'>R${p.Valor}</div>
                                     </div> 
                                  </div> 
                               </div>
                               <div className='rip'></div>
                               <div className='bottom DF FW'>
                                  <div className='barcode container-50'></div>
                                  <a className='buy container-50' href=''>Comprar</a>
                               </div>
                            </div>
    	    			</div>
    	    		)
    	    	})	
    	    }
    	  </div>
    	);
  	}
}

export default ListSetores;