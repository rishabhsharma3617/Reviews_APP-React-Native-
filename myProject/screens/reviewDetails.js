import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global'

export default function reviewDetails(props) {

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>This is review</Text>
            <Text>{ props.navigation.getParam('title')}</Text>
            <Text>{ props.navigation.getParam('body')}</Text>
            <Text>{ props.navigation.getParam('rating')}</Text>
        </View>
    )
}

