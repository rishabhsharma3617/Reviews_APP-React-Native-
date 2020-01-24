import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/home'
import reviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'
import React from 'react'

const screens = {
    Home : {
        screen : Home,
        navigationOptions : {
            headerTitle : () => <Header /> 
        }
    },
    reviewDetails : {
        screen : reviewDetails,
        
        navigationOptions : {
            title : 'ReviewDetails'
        }
    }
}

const HomeStack = createStackNavigator(screens , {
    defaultNavigationOptions : {
        headerTintColor : '#444',
        headerStyle : { backgroundColor : '#eee'}
    }
})
export default HomeStack