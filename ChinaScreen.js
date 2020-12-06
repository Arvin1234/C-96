import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class ArgentinaScreen extends React.Component{
render(){
  return(
   <View>
      <Text style = {{marginTop: 100, marginLeft: 100, color: 'orange'}}>Peking Duck</Text>
      <Image style = {{width: 100, height :100, marginTop: 100, marginLeft: 100}}
      source = {{uri: "https://images.pexels.com/photos/5848599/pexels-photo-5848599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}/>
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('ChooseScreen')}>
        <Text style = {{marginTop: 50, marginLeft: 100, color: 'orange'}}>Back</Text>
      </TouchableOpacity>
   </View>
  )
 }
}