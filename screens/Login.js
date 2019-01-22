
import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput, Text, ImageBackground} from 'react-native';
import { HomeScreen } from '../navigation/Navigation';


type Props = {};
export default class Login extends Component<Props> {

  doLogin() {
    HomeScreen();
  }
  
  signUp() { 

  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.mainImage} source={require('../assets/images/woman.jpg')} >
          <Text style={styles.title}>Champion</Text>
          <View style={styles.form}>
            <TextInput style={styles.formInput} placeholderTextColor="white" placeholder="Email" ></TextInput>
            <TextInput style={styles.formInput} placeholderTextColor="white" placeholder="Password" ></TextInput>
            <TouchableOpacity style={styles.formButton} onPress={this.doLogin.bind(this)}>
              <Text style={styles.textButton}>Login </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.formButton} onPress={this.signUp.bind(this)}>
              <Text style={styles.textButton}>Sign up </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#292929',
  },
  mainImage: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 20,
  },
  title: {
    fontFamily: 'Gravedigger',
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    marginTop: 30
  },
  form: {
    flex:1,
    marginBottom: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  formInput: {
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  formButton: {
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    alignSelf: 'stretch',
    backgroundColor: '#8431ED',
    color: 'white'
  },
  textButton: {
    color:'white',
    textAlign: 'center',
    fontSize: 20,
  }
});
