import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignupScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import { GoogleSignin } from '@react-native-community/google-signin';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SplashScreen from './SplashScreen';
import {Constants} from '../utility/Constants';
const Stack = createStackNavigator();
const AuthStack = (props) => {


    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: Constants.GOOGLE_WEB_CLIENT_ID,
        });
    })


    return (

            <Stack.Navigator initialRouteName="Splash">

                <Stack.Screen name="Splash"
                              component={SplashScreen}
                              options={{ headerShown: false }}
                              initialParams={{ screenTag: 'Login' }}
                />

                <Stack.Screen name="Login"
                              component={LoginScreen}
                              options={{ headerShown: false }}
                />

                <Stack.Screen name="SignUp"
                              component={SignupScreen}
                              options={({navigation}) => ({
                                  title: '',
                                  headerStyle: {
                                      backgroundColor: '#f9fafd',
                                      shadowColor: '#f9fafd',
                                      elevation: 0,
                                  },
                                  headerLeft: () => (
                                      <View style={{marginLeft: 10}}>
                                          <FontAwesome.Button
                                              name="long-arrow-left"
                                              size={25}
                                              backgroundColor="#f9fafd"
                                              color="#333"
                                              onPress={() => navigation.pop()}
                                          />
                                      </View>
                                  ),
                              })}
                />



            </Stack.Navigator>
    )
}
export default AuthStack
