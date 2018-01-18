import React, { Component } from 'react';
import ListSetores from './ListSetores';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
var jsonData = require('./band');
var setores = jsonData.Setores;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      BandName:[jsonData.NomeBanda],
      ShowLocal:[jsonData.Local],
      ShowData:[jsonData.Data],
      ShowHor:[jsonData.Horario],
      NomeShow:[jsonData.NomeShow],
      ShowSet:[setores],
      Realizacao:[jsonData.Realizacao],
      RealizacaoNome:[jsonData.RealizacaoNome]
    }
  }

  render(){
      const {BandName}       = this.state;
      const {NomeShow}       = this.state;
      const {ShowLocal}      = this.state;
      const {ShowHor}        = this.state;
      const {ShowSet}        = this.state; 
      const {ShowData}       = this.state; 
      const {Realizacao}     = this.state; 
      const {RealizacaoNome} = this.state;  
      const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: -23.647665, lng: -46.723822 }}
  >
    <Marker
      position={{ lat: -23.647665, lng: -46.723822 }}
    />
  </GoogleMap>
);

      return (      
        <section id='Tickets' className='container-80 tb-container-100 DF FW info-container'>
          <div className='container-90 info-header'>
            <span><b>{BandName}</b> - {NomeShow}</span>
          </div>
          <ul className='container-70 DF FW'>
            <li className='container-100 text-center infos-show-title DF FW'><i className='fas fa-info'></i></li>
            <li className='container-100 text-center infos-show' >Local: {ShowLocal}</li>
            <li className='container-100 text-center infos-show' >Dia: {ShowData}</li>
            <li className='container-100 text-center infos-show' >Horário: {ShowHor}</li>
          </ul>
          <ListSetores ShowSet={ShowSet} />
          <ul id='GeoMap' className='container-70 geomap'>
            <li className='container-100 text-center infos-show-title DF FW'><i className='fas fa-map-marker-alt'></i></li>
            <li><MapWithAMarker containerElement={<div style={{ height: `400px` }} />} mapElement={<div style={{ height: `100%` }} />} /></li>            
          </ul>
          <div className='container-90  DF FW info-footer'>
            <div className='container-30 realizacao'>
              <img src={Realizacao} alt={RealizacaoNome} />
            </div>
            <div className='container-60 termo'>
              <p>Classificação etária: 16 anos. De 10 a 15 anos acompanhados dos pais ou responsáveis legais. Clientes cartão Elo têm parcelamento em 3x sem juros e demais cartões em 2x sem juros. Vendas limitadas a 6 ingressos por CPF, em todos os canais de venda Tickets for Fun. Estes eventos requerem autorizações específicas. Consulte o site <a href='ticketsforfun.com.br/alvaras'>ticketsforfun.com.br/alvaras</a> e acompanhe a atualização sobre a expedição de alvarás relacionados aos eventos.</p>
            </div>
          </div>
        </section>
      );
  }
}

export default App;
