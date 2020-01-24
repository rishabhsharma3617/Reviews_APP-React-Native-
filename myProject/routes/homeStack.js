import { createStackNavigator } from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import reviewDetails from '../screens/reviewDetails'


const screens = {
    Home : {
        screen : Home,
        navigationOptions : {
            title : 'Home'
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
export default createAppContainer(HomeStack)