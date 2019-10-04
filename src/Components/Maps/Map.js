import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const CompassionMapComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps ={
        center: {
            lat: 59.95,
            lng:30.33
        },
        zomm: 11
    };


    render(){
        return (
            <div style={{ height : '100vh' , width: '100%' }} >
                <GoogleMapReact 
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
            >
                <CompassionMapComponent 
                    lat={59.955413}
                    lng={30.337844}
                    text=""
                />
            </GoogleMapReact>
            </div>
        );
    }
}
export default SimpleMap;
