import * as React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class ChooseScreen extends React.Component{
  render(){
    return(
      <View>
        <Text style = {{marginTop: 100, marginLeft: 100}}>What country are you in?</Text>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('ChinaScreen')}>
          <Text style = {{marginTop: 20, marginLeft: 150}}>China</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('IndiaScreen')}>
          <Text style = {{marginTop: 20, marginLeft: 150}}>India</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('SpainScreen')}>
          <Text style = {{marginTop: 20, marginLeft: 150}}>Spain</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('UsaScreen')}>
          <Text style = {{marginTop: 20, marginLeft: 150}}>USA</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('JapanScreen')}>
          <Text style = {{marginTop: 20, marginLeft: 150}}>Japan</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('ArgentinaScreen')}>
          <Text style = {{marginTop: 20, marginLeft: 150}}>Argentina</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('WelcomeScreen')}>
          <Text style = {{marginTop: 40, marginLeft: 100, color: 'orange'}}>Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}