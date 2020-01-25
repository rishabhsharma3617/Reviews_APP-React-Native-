import React , {Component} from 'react'
import { StyleSheet , Text , View, ShadowPropTypesIOS ,TouchableOpacity} from 'react-native'

export default function FlatButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.text}> {props.text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button :{
        marginTop : 30,
        borderRadius : 8,
        paddingVertical : 14,
        paddingHorizontal : 10,
        backgroundColor : '#f01d71'
    },
    text : {
        color : 'white',
        fontWeight : 'bold',
        textTransform : 'uppercase',
        fontSize : 16,
        textAlign : 'center',

    }
})