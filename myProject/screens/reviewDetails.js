import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function reviewDetails() {
    return (
        <View style={styles.container}>
            <Text>This is review</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 25
    }

})