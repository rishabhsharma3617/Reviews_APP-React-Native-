import {  createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import AboutStack from './aboutStack'
import HomeStack from './homeStack'

const RootDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : HomeStack
    },
    About : {
        screen : AboutStack
    },
})


export default createAppContainer(RootDrawerNavigator)