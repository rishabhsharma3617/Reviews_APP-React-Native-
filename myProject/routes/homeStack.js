import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/home'
import reviewDetails from '../screens/reviewDetails'
import Header from '../shared/header'
import React from 'react'

const screens = {
    Home : {
        screen : Home,
        navigationOptions : (props) => {
            return {
                headerTitle : () => <Header navigation={props.navigation} title='HOME'/>
            }
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
        headerStyle : { backgroundColor : '#eee' , height : 100}
    }
})
export default HomeStack