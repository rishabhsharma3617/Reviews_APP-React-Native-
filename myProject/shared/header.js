import React from 'react'
import { StyleSheet , Text , View, ShadowPropTypesIOS } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header( props ) {

    const openMenu = () => {
        props.navigation.openDrawer()
    }
    return(
        <View>
            <MaterialIcons name='menu' onPress={openMenu} size={30} style={styles.icon}/>
            <View>
                <Text style={ styles.headerText }>GameZone</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        width : '100%',
        height : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    headerText : {
        fontWeight : 'bold',
        fontSize : 20,
        color : '#333',
        letterSpacing : 1, 
    },
    icon : {
        position : 'absolute',
        left : '20px',
    }
})