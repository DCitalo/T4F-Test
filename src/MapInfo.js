import React, { Component } from 'react';

class MapInfo extends Component {
	constructor(props){
        super(props);

        this.state = {
          expanded: false,
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
      }
      open(){
      	this.setState({expanded: !this.state.expanded });
      }
      close(){
      	this.setState({expanded: !this.state.expanded });
      }

    render() {
    	const map       = this.props.mapInfo.Map;
    	const mapName   = this.props.mapInfo.NomeSetor;
    	if(!this.state.expanded){
    		return <div className='map-info' onClick={this.open}><i className='far fa-map'></i></div>
    	}
    	return(
    		<div className='map-info' onClick={this.close}>
    			<i className='far fa-map'></i>
	    		<div className='PA map-container'>
	            	<div className='close-map' onClick={this.close}>
	            		<i className="far fa-times-circle"></i>
	            	</div>
	            	<img src={map} alt={mapName} />
	            </div>
            </div>
        )
	}
}
export default MapInfo;