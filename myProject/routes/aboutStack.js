import { createStackNavigator } from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation'
import About from '../screens/about'

const screens = {
    About : {
        screen : About,
        navigationOptions : (props) => {
            return {
                headerTitle : () => <Header navigation={props.navigation}/>
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