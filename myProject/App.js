import React, { useState } from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'
import { AppLoading } from 'expo'


const getFonts = () => Font.loadAsync({
  'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
}) 


export default function App() {
  const [ fontsLoad , setFontsLoad ] = useState(false)

  if(fontsLoad){
    return (
      <View>
        <Home />
      </View>
    )
  }
  else{
    return (
    <AppLoading 
    startAsync = {getFonts}
    onFinish={()=> setFontsLoad(true)}
    />
    )
  }
}

