/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/utility/AuthProvider';
import Routes from './src/screens/Route';
import SplashScreen from './src/screens/SplashScreen';
const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (

      <AuthProvider>
         <Routes/>
      </AuthProvider>


  );
};



export default App;
