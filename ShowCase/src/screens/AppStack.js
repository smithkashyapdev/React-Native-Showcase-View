import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DashboardStack from './dashboard/DashboardStack';
import SplashScreen from './SplashScreen';
import CustomDrawerComponent from './dashboard/CustomDrawerContentComponent';
import BookmarkScreen from './dashboard/BookmarkScreen';
import { NotificationStackScreen, ProfileStackScreen } from "./dashboard/DashboardStack";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash"
                          component={SplashScreen}
                          options={{ headerShown: false }}
                          initialParams={{ screenTag: 'Home' }}
            />

            <Stack.Screen name='Home'   options={{ headerShown: false }} component={DrawerNavigator} />
        </Stack.Navigator>
    );
}

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerComponent {...props} />}>
            <Drawer.Screen name="DashBoard" component={DashboardStack} />
        </Drawer.Navigator>
    )
}

export default AppStack;
