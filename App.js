/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// const styles = StyleSheet.create({
//   container: {
//     StyleSheet.absoluteFillObject,
//     height: 400,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     StyleSheet.absoluteFillObject,
//   },
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      region: {
            latitude: -32,
            longitude: -32,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },
          marker: {
            latitude: -32,
            longitude: -32

          }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },
          marker: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,

          }
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }


  render() {
    return (
      <View style ={StyleSheet.absoluteFillObject}>
        <MapView
          style={StyleSheet.absoluteFillObject}
          region={this.state.region}>
            <Marker
              coordinate={this.state.marker}
              title="usted esta aqui"
              description="Hola Tino!"
            />
        </MapView>

      </View>
    );
  }

  // render() {
  //   return (
  //     <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Latitude: {this.state.latitude}</Text>
  //       <Text>Longitude: {this.state.longitude}</Text>
  //       {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
  //     </View>
  //   );
  // }

}
