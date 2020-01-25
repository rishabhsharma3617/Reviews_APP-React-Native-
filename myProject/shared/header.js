import React , {Component} from 'react'
import { StyleSheet , Text , View, ShadowPropTypesIOS } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

// if (Platform.OS === 'android') {
//   SafeAreaView.setStatusBarHeight(StatusBar.currentHeight);
// } 

export default function Header( props ) {

    const openMenu = () => {
        props.navigation.openDrawer()
    }
    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' onPress={openMenu} size={30} style={styles.icon}/>
            <View>
                    <Text style={ styles.headerText }>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        
        marginLeft : 0,
        
        width : '480%',
        height : '150%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    
        
    },
    headerText : {
        fontWeight : 'bold',
        fontSize : 20,
        color : 'blue',
        letterSpacing : 1, 
    },
    icon : {
        position : 'absolute',
        left : 0,
        color : 'red'
    }
})