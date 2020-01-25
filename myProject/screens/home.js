import React,{useState} from 'react';
import { StyleSheet, Text, View , Button , FlatList , TouchableOpacity , Modal , TouchableWithoutFeedback , Keyboard } from 'react-native';
import { globalStyles } from '../styles/global'
import Card from '../shared/card'
import ReviewForm from './reviewForm'
import { MaterialIcons } from '@expo/vector-icons'

export default function Home(props) {  //props come here bcoz it automativcaalyy gets because we defined


    const [ modalOpen , setModalOpen ] = useState(false)
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

        const addReview = (review) => {
            review.key = Math.random().toString()
            setreviews((currentReviews) => {
                return [ review , ...currentReviews]
            })
           
            setModalOpen(false)
        }

    return (
        <View style={globalStyles.container}>
            
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    
                    <MaterialIcons 
                    name='close'
                    style={{ ...styles.modalToggle , ...styles.modalCLose}}
                    size={24}
                    onPress = { () => setModalOpen(false)}
                    />
                        <ReviewForm  addReview={addReview}/>
                        </View>
                    
                </TouchableWithoutFeedback>
               </Modal>

            <MaterialIcons 
            name='add'
            size={24}
            style={styles.modalToggle}
            onPress = { () => setModalOpen(true)}
            />
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




const styles = StyleSheet.create({

    modalToggle : {
        marginBottom  :10,
        borderWidth : 1,
        borderColor : '#f2f2f2',
        padding : 10,
        borderRadius : 10,
        alignSelf : 'center'
    },
    modalCLose : {
        marginTop : 20,
        marginBottom : 0
    },
    modalContent : {
        flex : 1
    }
})