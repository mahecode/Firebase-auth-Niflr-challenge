import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { 
  createStackNavigator,
  createDrawerNavigator, 
  DrawerItems, 
  SafeAreaView
 } from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomScreen';





const CustomDrawerContentComponent = (props)=>(
  <SafeAreaView style={{flex:1}}>
      <View style={{height:150,paddingTop: 100,paddingBottom:100,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
          <Image 
              source={require('../assets/images/robot-dev.png')} 
              style={{
                  width:120, 
                  height:120, 
                  alignItems:'center', 
                  justifyContent:'center',
                  borderRadius: 60}} />
      </View>
      <ScrollView>
          <DrawerItems {...props} />
      </ScrollView>
  </SafeAreaView>
)


export default createDrawerNavigator({
    Home: HomeScreen,
  'Food Items': WelcomeScreen,
}, { contentComponent: CustomDrawerContentComponent})

