import React , {Component} from 'react'
import { StyleSheet , Text , View, Image } from 'react-native'
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
            <View style={styles.headerContent}>
                    <Image source={require('../assets/heart_logo.png')} style={styles.logo}/>
                    <Text style={ styles.headerText }>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        
        marginLeft : 0,
        
        width : '300%',
        height : '150%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    
        
    },
    headerText : {
        fontWeight : 'bold',
        fontSize : 20,
        letterSpacing : 1, 
    },
    icon : {
        position : 'absolute',
        left : 0,
        color : 'red'
    },
    logo : {
        width : 26,
        height : 26,
        marginHorizontal : 10 , 

    },
    headerContent : {
        flexDirection : 'row'
    }
})