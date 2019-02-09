
import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput, Text, ImageBackground} from 'react-native';
import { loginScreen } from '../navigation/Navigation';
import DatePicker from 'react-native-datepicker';


export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {date:"12/05/2015"}
    }
    
    doLogin() {
        loginScreen();
    }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.mainImage} source={require('../assets/images/man.jpg')} >
          <Text style={styles.title}>Champion</Text>
          <View style={styles.form}>
            <TextInput style={styles.formInput} placeholderTextColor="white" placeholder="Nome" ></TextInput>
            <TextInput style={styles.formInput} placeholderTextColor="white" placeholder="Email" textContentType="emailAddress"></TextInput>
            <DatePicker
              style={styles.calendar}
              date={this.state.date}
              ref='datepicker'
              showIcon = {false}
              mode="date"
              format="DD/MM/YYYY"
              placeholder="Data de nascimento"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderColor: 'white',
                  marginTop: 8,
                  display: 'flex',
                  alignItems: 'flex-start'
                },
                dateText: {
                  color: 'white',
                  fontSize: 20,
                }
              }}
              onDateChange={(date) => { 
                  this.props.onDateChange && this.props.onDateChange(date);
                  this.setState({date: date});
              }}
            />
            <TextInput style={styles.formInput} placeholderTextColor="white" placeholder="Peso (KG)"    keyboardType='numeric'
              maxLength={5}></TextInput>
              <TextInput style={styles.formInput} placeholderTextColor="white" placeholder="Altura (cm)"    keyboardType='numeric'
              maxLength={3}></TextInput>
            <TextInput style={styles.formInput} placeholderTextColor="white" placeholder="Senha" ></TextInput>
            <TouchableOpacity style={styles.formButton} onPress={this.doLogin.bind(this)}>
              <Text style={styles.textButton}>Cadastrar </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.formButton} onPress={this.doLogin.bind(this)}>
              <Text style={styles.textButton}>Voltar </Text>
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
  calendar: {
    width: 370
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
