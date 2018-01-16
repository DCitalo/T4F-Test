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
    <div className='container-100 info-container'>
      <ul className='Container-90 DF FW'>
        <li>{NomeShow}</li>
        <li>{BandName}</li>
        <li>{ShowLocal}</li>
        <li>{ShowHor}</li>
      </ul>
      <ListSetores ShowSet={ShowSet} />
    </div>
</section>
      );
  }
}

export default App;
