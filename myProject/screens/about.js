import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function About() {
    return (
        <View style={styles.container}>
            <Text>This is about</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 25
    }

})