import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { HomeScreen, trainingsScreen, chatScreen } from '../navigation/Navigation';

export default class SideDrawer extends Component {


    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.perfil}>
                    <Image style={styles.perfilImage} source={require('../assets/images/man.jpg')} />
                    <Text style={styles.perfilInfoText} > Carlos Jose</Text>
                    <Text style={styles.perfilInfoText}> 074.692.124-18</Text>
                </View>
                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menuOption} onPress={()=> HomeScreen()}>
                        <Text style={styles.menuOptionText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuOption} onPress={() => trainingsScreen()}>
                        <Text style={styles.menuOptionText}>Treinos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuOption} onPress={() => chatScreen()}>
                        <Text style={styles.menuOptionText}>Chat</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#292929',
        width: '60%',
        height: '100%'
    },
    perfil: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        paddingBottom: 10,
        marginBottom: 10
    },
    perfilInfoText: {
        color: 'white',
        textAlign: 'center',
    },
    perfilImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: '#8431ED',
        borderWidth: 1,
        alignSelf: 'center',
        marginBottom: 10,
    },
    menuContainer: {
        paddingLeft: 20
    },
    menuOption: {
        height: 30,
        justifyContent: 'center',
    },
    menuOptionText: {
        color: 'white'
    }
})