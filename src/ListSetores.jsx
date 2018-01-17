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
    	  <div id='Tickets' className='container-100 DF FW'>
    	    {
    	    	ShowSet.map((p) =>{
    	    		return(
    	    			<div className='container-25 tb-container-100 unit-container DF FW' key={p.id}>
                            <div className='ticket'> 
                                <div className='top'>
                                    <div className='ticket-head'>
                                        <p className='bandname'><b>{BandName}</b></p>
                                        <span className='tourname'>{NomeShow}</span>
                                    </div>
                                    <div>
                                        <img src='Images/bg_intro_desktop.png' alt='' />
                                    </div>
                                  <div className='deetz DF FW'>
                                     <div className='event container-80'>
                                        <div className='label-top'>{DataShow}</div>
                                        <div className='label-bot'><b>{ShowLocal}</b></div>
                                     </div>
                                     <div className='infos container-20'>
                                        <i className="far fa-map"></i>
                                     </div>
                                     <div className='price container-50'>
                                        <div className='label-top'>Setor</div>
                                        <div className='label-bot'><b>{p.NomeSetor}</b></div>
                                     </div> 
                                     <div className='price container-50'>
                                        <div className='label-top'>Preço</div>
                                        <div className='label-bot'><b>R${p.Valor}</b></div>
                                     </div> 
                                  </div> 
                               </div>
                               <div className='rip'></div>
                               <div className='bottom DF FW'>
                                  <div className='barcode container-50'></div>
                                  <a className='buy container-50 text-center' href=''>Comprar</a>
                               </div>
                            </div>
                            <div className='PA'>
                                <img src='{p.Map}' alt='Mapa {p.NomeSetor}' />
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