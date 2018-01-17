import React, { Component } from 'react';
import ListSetores from './ListSetores';
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
      ShowSet:[setores]
    }
  }
  render(){
      const {BandName} = this.state;
      const {NomeShow} = this.state;
      const {ShowLocal} = this.state;
      const {ShowHor} = this.state;
      const {ShowSet} = this.state; 
      const {ShowData} = this.state; 
      return (      
<section className='container-80 tb-container-100 DF FW'>
    <div className='container-100 info-container DF FW'> 
      <div className='container-90 info-header'>
        <span><b>{BandName}</b> - {NomeShow}</span>
      </div>
      <ul className='container-70 DF FW infos-banda'>
        <li className='container-100' >Local: {ShowLocal}</li>
        <li className='container-100' >Dia: {ShowData}</li>
        <li className='container-100' >Horário: {ShowHor}</li>
      </ul>
      <ListSetores ShowSet={ShowSet} />
    </div>
</section>
      );
  }
}

export default App;
