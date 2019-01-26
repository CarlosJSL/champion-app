import React, { Component } from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, ImageBackground} from 'react-native';

export default class HomeScreen extends Component {

    render() {
        const data = [
            { quarter: 1, earnings: 13000 },
            { quarter: 2, earnings: 16500 },
            { quarter: 3, earnings: 14250 },
            { quarter: 4, earnings: 19000 }
          ];
          

        return (
            <View style={styles.container}>
                <ImageBackground style={styles.perfilBackImage} blurRadius={2} source={require('../assets/images/man.jpg')} >
                    <View style={styles.perfil}>
                        <Image style={styles.perfilImage} source={require('../assets/images/woman.jpg')} />
                        <Text style={styles.titleInfo} >Carlos José</Text>
                        <Text style={styles.titleInfo}>Brazil, 21 years</Text>
                        <TouchableOpacity style={styles.formButton}>
                        <Text style={styles.textButton}>Edit </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.info}>
                    <View style={styles.generalInfo}>
                        <View style={styles.trainings}>
                            <Text style={styles.label}>
                                666
                            </Text>
                            <Text style={styles.labelInfo}>
                                Treinos
                            </Text>
                        </View>
                        <View style={styles.trainings}>
                            <Text style={styles.label}>
                                20
                            </Text>
                            <Text style={styles.labelInfo}>
                                Treinos
                            </Text>
                        </View>
                        <View style={styles.trainingsLast}>
                            <Text style={styles.label}>
                                666
                            </Text>
                            <Text style={styles.labelInfo}>
                                Treinos
                            </Text>
                        </View>
                    </View>

                    <View style={styles.privateInfo}>
                        <View style={styles.trainings}>
                            <Text style={styles.label}>
                                20%
                            </Text>
                            <Text style={styles.labelInfo}>
                                Gordura
                            </Text>
                        </View>
                        <View style={styles.trainings}>
                            <Text style={styles.label}>
                                62kg
                            </Text>
                            <Text style={styles.labelInfo}>
                                Peso
                            </Text>
                        </View>
                        <View style={styles.trainingsLast}>
                            <Text style={styles.label}>
                                183cm
                            </Text>
                            <Text style={styles.labelInfo}>
                                Alturaa
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#292929',
    },
    perfil: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    perfilBackImage: {
        alignSelf: 'stretch',
    },
    titleInfo: {
        fontSize: 20,
        color: 'white'
    },
    perfilImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#8431ED',
        borderWidth: 1,
        marginTop: 10,
    },
    generalInfo: {
        borderBottomWidth: 0.5,
        borderColor: '#4F4F4F',
        flexDirection: 'row',
    },
    privateInfo: {
        borderBottomWidth: 0.5,
        borderColor: '#4F4F4F',
        flexDirection: 'row',
    },
    trainings: {
        flex: 1,
        borderRightWidth: 0.5,
        borderColor: '#4F4F4F',
    },
    trainingsLast: {
        flex: 1,
    },
    formButton: {
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        width: 160,
        backgroundColor: '#8431ED',
        color: 'white'
    },
    label: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'TextMeOneRegular'
    },
    labelInfo: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'TextMeOneRegular',
    },
    textButton: {
        color:'white',
        textAlign: 'center',
        fontSize: 20,
    },
    info: {
        display: 'flex',
    }
});