import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'
import About from '../screens/about'
import Header from '../shared/header'
const screens = {
    About : {
        screen : About,
        navigationOptions : (props) => {
            return {
                headerTitle : () => <Header navigation={props.navigation} title='ABOUT'/>
            }
        }
    }
}

const AboutStack = createStackNavigator(screens , {
    defaultNavigationOptions : {
        headerTintColor : '#444',
        headerStyle : { backgroundColor : '#eee'}
    }
})
export default AboutStack