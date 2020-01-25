import React,{useState} from 'react';
import { StyleSheet, Text, View , Button , FlatList , TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shared/card'


export default function Home(props) {  //props come here bcoz it automativcaalyy gets because we defined

    const [ reviews,setreviews ] = useState([
        { 
            title : 'Vampire Diaries',
            body : 'Such a mysterious series for the people who likes supernatural stuff',
            rating : 5,
            key : '1'
        },

        {   
            title : 'Friends',
            body : 'Best series made ever , u can watch it anytime to ligthen up the mood and yes we were on a break',
            rating : 5,
            key : '2'
        },

        {   
            title : 'Silicon Valley',
            body : 'A very funny series for the techies and the geeks',
            rating : 3,
            key : '3'
        },
        {
            title : 'Mirzapur',
            body : 'Such a thriller series with lots of adult and slang language',
            rating : 5,
            key : '5'

        }
        
    ])



    return (
        <View style={globalStyles.container}>
            <FlatList 
            data={reviews}
            keyExtractor={item => item.key.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={ () => props.navigation.navigate('reviewDetails',item)}>
                    <Card>
                    <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}




