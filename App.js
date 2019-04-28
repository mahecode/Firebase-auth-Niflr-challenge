import React from 'react';
import { StyleSheet, View , ScrollView, Image , Text } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import AppNavigator from './navigation/AppNavigator';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './screens/HomeScreen';

class App extends React.Component {

  render() {
      return (
        <View style={styles.container}>
          <Navbar navigation={this.props.navigation} />
          <Text style={styles.textStyle}>Welcome to Niflr challenge</Text>
        </View>
      );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 200,
  }
});


const CustomDrawerContentComponent = (props)=>(
  <SafeAreaView style={{flex:1}}>
      <View style={{height:150,paddingTop: 100,paddingBottom:100,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
          <Image 
              source={require('./assets/images/robot-dev.png')} 
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


const AppDrawerNavigator =  createDrawerNavigator({
  Home: HomeScreen,
 'Food Items': AppNavigator
}, {contentComponent : CustomDrawerContentComponent});


const AppSwitchNavigator = createSwitchNavigator({
  Home: AppDrawerNavigator
})

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;



