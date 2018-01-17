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
      return (      
<section className='container-80 DF FW'>
    <div className='container-100 info-container DF FW'>
      <div className='container-30 NomeBanda'>
        <img src='Images/Deep_Purple-logo.png' alt='{BandName}' />
      </div>
      <ul className='container-70 DF FW infos-banda'>
        <li className='container-100' >Nome do Show: {NomeShow}</li>
        <li className='container-100' >Nome da Banda: {BandName}</li>
        <li className='container-100' >Local: {ShowLocal}</li>
        <li className='container-100' >Horário: {ShowHor}</li>
      </ul>
      <ListSetores ShowSet={ShowSet} />
    </div>
</section>
      );
  }
}

export default App;
