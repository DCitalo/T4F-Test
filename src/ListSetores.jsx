import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import MapInfo from './MapInfo';
var jsonData = require('./band');

class ListSetores extends Component {
	render() {
    	  const ShowSet   = this.props.ShowSet["0"];
        const BandName  = jsonData.NomeBanda;
        const ShowLocal = jsonData.Local;
        const NomeShow  = jsonData.NomeShow;
        const DataShow  = jsonData.Data;
    	return (
    	  <ul id='Tickets' className='container-70 tb-container-100 DF FW'>
          <li className='container-100 text-center infos-show-title DF FW'><i className="fas fa-ticket-alt"></i></li>
    	    {
    	    	ShowSet.map((p) =>{
    	    		return(
    	    			<li className='container-50 tb-container-90 unit-container DF FW' key={p.id}>
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
                                    <div className='label-cont container-80'>
                                      <div className='label-top'>{ShowLocal}</div>
                                      <div className='label-bot'><b>{DataShow}</b></div>
                                    </div>
                                    <MapInfo mapInfo={p} />
                                    <div className='label-cont container-50'>
                                      <div className='container-100'>
                                        <div className='label-top'>Setor</div>
                                        <div className='label-bot'><b>{p.NomeSetor}</b></div>
                                      </div> 
                                      <div className='container-100'>
                                        <div className='label-top'>Preço</div>
                                        <div className='label-bot'><b>R${p.Valor}</b></div>
                                      </div> 
                                    </div>
                                    <div className='label-cont container-50'>
                                      <span className='label-top'>Quantidade:</span>
                                      <NumericInput min={1} max={50} value={1}/>
                                    </div>
                                  </div> 
                               </div>
                               <div className='rip'></div>
                               <div className='bottom DF FW'>
                                  <div className='barcode container-50'></div>
                                  <a className='buy container-50 text-center' href=''>Comprar</a>
                               </div>
                            </div>
    	    			</li>
    	    		)
    	    	})	
    	    }
    	  </ul>
    	);
  	}
}

export default ListSetores;