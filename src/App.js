import React, { Component } from 'react';
import ListPlanet from './ListPlanet';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      PageBand:['/band.json'],
      BandInfo:[],
    }
  
    this.getBand = this.getBand.bind(this);
  }

  getBand(){
    const {PageBand} = this.state;    
    return axios.get("./band.json")
    .then((response) => {
      this.setState({BandInfo: response.data})
    });
  }

  render() {
    const {BandInfo} = this.state;
    console.log(BandInfo);
      
      return ( 
        <section className="container-90 DF FW">
          <div>
            <h1></h1>
          </div>
        </section>
      );
  }
}

export default App;
