import React,{useState} from 'react';
import { StyleSheet, Text, View , Button , FlatList , TouchableOpacity , Modal } from 'react-native';
import { globalStyles } from '../styles/global'
import  { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler';
import * as Yup from 'yup'



const ReviewSchema = Yup.object({
        title: Yup.string().required()
        .min(4),
        body: Yup.string().required()
        .min(8),
        rating: Yup.string().required().test('is num 1-5','Rating must be number 1-5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
})


export default function ReviewForm(props) {
        return (
            <View style={globalStyles.container}>
                <Formik
                    validationSchema={ReviewSchema}
                    initialValues = {{ title : '' , body : '' , rating : ''}}
                    onSubmit = {(values , actions) => {
                            props.addReview(values)
                            actions.resetForm()
                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput 
                            style={globalStyles.input}
                            placeholder='Series Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            />

                            <TextInput 
                            multiline
                            style={globalStyles.input}
                            placeholder='Give your Review'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            />

                            <TextInput 

                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            keyboardType = 'numeric'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            />
                            <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                        </View>
                    )}
                </Formik>

            </View>
        )
}

const styles = StyleSheet.create({

})