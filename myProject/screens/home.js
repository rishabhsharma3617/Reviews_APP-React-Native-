import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>This is home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 25
    },
    titleText : {
        fontFamily : 'nunito-bold',
        fontSize : 18
    }


})