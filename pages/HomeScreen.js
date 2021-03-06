//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
 
import journey_lady from "../images/journey-lady.png";

export default class HomeScreen extends React.Component {
  //Home Screen to show in Home Option
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#13103F' }}>
        <Text style={{ marginTop: 40, fontSize: 40, color: '#FFFFFF' }}>Zen Journey</Text>
        <Text style={{ marginTop: 10, fontSize: 22, color: '#FFFFFF' }}>An Adaptive Guide to a Better You
</Text>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={journey_lady} style={styles.image}/>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Record')}>
            <Text>Record in Journal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Calendar')}>
            <Text>Start a Journey</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#71D1CD',
    padding: 10,
    width: 350,
    marginTop: 10,
    marginBottom: 15
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
}
});