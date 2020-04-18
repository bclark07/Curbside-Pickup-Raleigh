import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { GOOGLE_API_KEY } from "../utils/keys";

// function to replace center if user enters an address, code originally had initialCenter as the variable
//test this in react-practice folder

class MapView extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: { name: "" }
  }

  onMarkerClick = (props, marker, e) => {
    console.log(props)
    this.setState({
      selectedPlace: props.restaurant,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  // console.log(retaurants)
  // displayMarkers = () => {
  //   this.props.restaurants.map((restaurant) => (
  //     <Marker
  //       key={restaurant.name.value}
  //       restaurant={restaurant}
  //       center={{
  //         lat: parseFloat(restaurant.contact.lat),
  //         lng: parseFloat(restaurant.contact.lng),
  //       }}
  //     />
  //   ));
  // };

  //   return this.state.stores.map((store, index) => {
  //     return (
  //       <Marker
  //         key={index}
  //         id={index}
  //         position={{
  //           lat: store.latitude,
  //           lng: store.longitude,
  //         }}
  //         //  onClick={() => console.log("You clicked me!")}
  //       />
  //     );
  //   });
  // };

  render() {
    const mapStyles = {
      width: "500px",
      height: "500px",
    };

    // const points = [
    //   { lat: 35.0, lng: -78.0 },
    //   { lat: 35.0, lng: -79.0 },
    //   { lat: 36.0, lng: -79.0 },
    //   { lat: 36.0, lng: -78.0 },
    // ];

    // var bounds = new this.props.google.maps.LatLngBounds();
    // for (var i = 0; i < points.length; i++) {
    //   bounds.extend(points[i]);
    // }

    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        // initialCenter={{ lat: 35.7796, lng: -78.6382 }}
        // bounds={bounds}

        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
        center={{ lat: this.props.lat, lng: this.props.lng }}
      >
        {this.props.restaurants.map((restaurant) => (
          <Marker
            key={restaurant._id}
            restaurant={restaurant}
            position={{
              lat: parseFloat(restaurant.contact.lat),
              lng: parseFloat(restaurant.contact.lng),
            }}
            onClick={this.onMarkerClick}
          />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
        {/* {this.displayMarkers()} */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(MapView);
