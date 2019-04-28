import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: Login,
  Register: Register,
  Main: MainTabNavigator,
}));