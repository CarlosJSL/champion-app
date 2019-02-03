import React, { Component } from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import VideoPlayer from 'react-native-video-controls';

export default class ExercisesScreen extends Component {
    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <View style={styles.exerciseVideo}>
                    <VideoPlayer source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
                        ref={(ref) => {
                            this.player = ref
                        }}
                        paused={true}
                        disableBack="true"
                        style={styles.backgroundVideo} />
                </View>
                <View style={styles.exerciseContainer}>
                    <Text style={styles.exerciseTitle}>Agachamento máquina</Text>
                    <View style={styles.exerciseInfo}>
                        <View style={styles.exerciseInfoItem}>
                            <Text style={styles.exerciseInfoItemTitle}>Série</Text>
                            <Text style={styles.exerciseInfoItemValue}>3x</Text>
                        </View>
                        <View style={styles.exerciseInfoItem}>
                            <Text style={styles.exerciseInfoItemTitle}>Repetições</Text>
                            <Text style={styles.exerciseInfoItemValue}>15</Text>
                        </View>
                        <View style={styles.exerciseInfoItem}>
                            <Text style={styles.exerciseInfoItemTitle}>Descanso</Text>
                            <Text style={styles.exerciseInfoItemValue}>1'</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render () {
        const data = ['asf','asf','asfu','asufi'];
        return (
            <ImageBackground style={styles.mainImage} source={require('../assets/images/exercises.jpeg')} >
                <View style={styles.container}>
                    <Carousel
                        data={data}
                        renderItem={this._renderItem}
                        sliderWidth={500}
                        itemWidth={300}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    mainImage: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150,
    },
    slide: {
        height: 300,
        flexDirection: 'column',
    },
    title: {
        fontSize: 10
    },
    exerciseVideo: {
        backgroundColor: 'white',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        height: 170
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    exerciseContainer: {
        backgroundColor: '#292929',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        height: 130,
        padding: 20
    },
    exerciseTitle: {
        color: 'white',
        fontSize: 18,
    },
    exerciseInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    exerciseInfoItem: {
        width: "33%",
        alignItems: 'center'
    },
    exerciseInfoItemTitle: {
        color: '#8431ED',
        fontSize: 15,
        fontWeight: 'bold'
    },
    exerciseInfoItemValue: {
        color: 'white'
    }
})