import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class ArgentinaScreen extends React.Component{
render(){
  return(
   <View>
      <Text style = {{marginTop: 100, marginLeft: 100, color: 'orange'}}>Asados</Text>
      <Image style = {{width: 100, height :100, marginTop: 100, marginLeft: 100}}
      source = {{uri: "https://www.food24.com/wp-content/uploads/2010/06/bedd60b31be540f0bc18ee05578a452d.jpg"}}/>
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('ChooseScreen')}>
        <Text style = {{marginTop: 50, marginLeft: 100, color: 'orange'}}>Back</Text>
      </TouchableOpacity>
   </View>
  )
 }
}