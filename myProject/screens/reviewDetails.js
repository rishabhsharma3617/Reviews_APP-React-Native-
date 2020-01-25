import React from 'react';
import { StyleSheet, Text, View, Button ,Image} from 'react-native';
import { globalStyles , images } from '../styles/global'
import Card from '../shared/card'

export default function reviewDetails(props) {
        const rating = props.navigation.getParam('rating')
    return (
             <View style={globalStyles.container}>
                 <Card>
                    <Text style={globalStyles.titleText}>Review</Text>
                    <Text>{ props.navigation.getParam('title')}</Text>
                    <Text>{ props.navigation.getParam('body')}</Text>
                    <View style={styles.rating}>
                    <Text> Rishabh's Rating :</Text>
                    <Image source={images.ratings[rating]}/>
                    </View>
                    
                    
                 </Card>
            </View>
       
    )
}
const styles = StyleSheet.create({
    rating : {
        flexDirection : 'row',
        justifyContent : 'center',
        paddingTop : 16,
        marginTop : 16,
        borderTopWidth : 1,
        borderTopColor : '#eee'
    }
})
