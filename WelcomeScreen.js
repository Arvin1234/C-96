import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Header, Icon} from 'react-native-elements';

export default class WelcomeScreen extends React.Component {

  render(){
  return (
    <View>
      <Header
      centerComponent = {{text: "Welcome to the Food Choosing App", style: {color: "black"}}}/>

    <View>
      <Image style = {{width: 100, height: 100, marginTop: 100, marginLeft: 100}}
      source = {{uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
      />
      <Image style = {{width: 100, height: 100, marginTop: 50, marginLeft: 50}}
      source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIN0FxciwHOvXhDxOIlOmej2qKszVOI82DQ&usqp=CAU"}}
      />
      <Image style = {{width: 100, height: 100, marginTop: 50, marginLeft: 100}}
      source = {{uri: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}/>
      <Image style = {{width: 100, height: 100, marginTop: -250, marginLeft: 200}}
      source = {{uri: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}/>
      
       <TouchableOpacity style = {{marginTop: 100, marginLeft: 270}}
         onPress={() => this.props.navigation.navigate('ChooseScreen')}>
         <Text>Next</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}
}