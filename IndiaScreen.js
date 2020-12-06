import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class ArgentinaScreen extends React.Component{
render(){
  return(
   <View>
      <Text style = {{marginTop: 100, marginLeft: 100}}>Chicken Butter Masala</Text>
      <Image style = {{width: 100, height :100, marginTop: 100, marginLeft: 100}}
      source = {{uri: "https://static.toiimg.com/thumb/53205522.cms?imgsize=302803&width=800&height=800"}}/>
      <TouchableOpacity
      onPress={() => this.props.navigation.navigate('ChooseScreen')}>
        <Text style = {{marginTop: 50, marginLeft: 100, color: 'orange'}}>Back</Text>
      </TouchableOpacity>
   </View>
  )
 }
}