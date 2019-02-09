import React, { Component } from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, ImageBackground} from 'react-native';
import { exercisesScreen } from '../navigation/Navigation';

export default class TrainningsScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.trainnings}>
                    <TouchableOpacity onPress={() => exercisesScreen()}>
                        <View style={styles.trainning}>
                            <Image style={styles.trainningImage} source={require('../assets/images/man.jpg')}/>
                            <Text style={styles.trainningLabel}> Abdomen, perna</Text>
                            <Text style={styles.trainningType}>B</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
    },
    trainnings: {
        flex: 1,
        paddingLeft: 50,
        paddingRight: 50,
        flexDirection: 'column',
    },
    trainning: {
        marginTop: 20,
        backgroundColor: 'white',
        height: 150,
        borderRadius: 2,
    },
    trainningImage: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    trainningLabel: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        width: 200,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    trainningType: {
        position: 'absolute',
        right: 30,
        top: 30,
        color: 'white',
        fontSize: 60,
    }
})