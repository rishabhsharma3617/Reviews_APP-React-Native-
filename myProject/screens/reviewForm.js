import React,{useState} from 'react';
import { StyleSheet, Text, View , Button , FlatList , TouchableOpacity , Modal } from 'react-native';
import { globalStyles } from '../styles/global'
import  { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler';

export default function ReviewForm() {
        return (
            <View style={globalStyles.container}>
                <Formik
                    initialValues = {{ title : '' , body : '' , rating : ''}}
                    onSubmit = {(values) => {
                            console.log(values)
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