import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shared/card'

export default function reviewDetails(props) {

    return (
             <View style={globalStyles.container}>
                 <Card>
                    <Text style={globalStyles.titleText}>Review</Text>
                    <Text>{ props.navigation.getParam('title')}</Text>
                    <Text>{ props.navigation.getParam('body')}</Text>
                    <Text>{ props.navigation.getParam('rating')}</Text>
                 </Card>
            </View>
       
    )
}

