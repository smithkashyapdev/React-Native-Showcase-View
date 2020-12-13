import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import ExploreScreen from './ExploreScreen';
import {COLORS} from '../../utility/Colors';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import {
        View
} from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const DashboardStack = () => (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
        <Tab.Screen
            name="HomeTab"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: COLORS.colorPrimaryDark,
                tabBarIcon: ({color}) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={NotificationStackScreen}
            options={{
                tabBarLabel: 'Updates',
                tabBarColor: COLORS.colorPrimaryDark,
                tabBarIcon: ({color}) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: COLORS.colorPrimaryDark,
                tabBarIcon: ({color}) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: COLORS.colorPrimaryDark,
                tabBarIcon: ({color}) => (
                    <Icon name="ios-aperture" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default DashboardStack

const HomeStackScreen = ({navigation}) => {
        return (

            <HomeStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: COLORS.background,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                    >

                <HomeStack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'FoodFinder',
                        headerLeft: () => (
                            <View style={{marginLeft: 10}}>
                                <Icon.Button
                                    name="ios-menu"
                                    size={25}
                                    color={COLORS.white}
                                    backgroundColor={COLORS.textColor}
                                    onPress={() => navigation.openDrawer()}
                                />
                            </View>
                        )
                    }}
                />

            </HomeStack.Navigator>

        );








}

const NotificationStackScreen = ({navigation}) => {

        return (
            <NotificationStack.Navigator
                screenOptions={{
                        headerStyle: {
                                backgroundColor: COLORS.background,
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                                fontWeight: 'bold',
                        },
                }}>
                    <NotificationStack.Screen
                        name="Notifications"
                        component={NotificationScreen}
                        options={{
                                headerLeft: () => (
                                    <View style={{marginLeft: 10}}>
                                        <Icon.Button
                                            name="ios-menu"
                                            size={25}
                                            color={COLORS.white}
                                            backgroundColor={COLORS.textColor}
                                            onPress={() => navigation.openDrawer()}
                                        />
                                    </View>
                                ),
                        }}
                    />
            </NotificationStack.Navigator>
        );
}


const ProfileStackScreen = ({navigation}) => {

        return (
            <ProfileStack.Navigator
                screenOptions={{
                        headerStyle: {
                                backgroundColor: COLORS.background,
                                shadowColor: COLORS.background, // iOS
                                elevation: 0, // Android
                        },
                        headerTintColor: COLORS.text,
                }}>
                    <ProfileStack.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{
                                title: 'Profile',
                                headerLeft: () => (
                                    <View style={{marginLeft: 10}}>
                                        <View style={{marginLeft: 10}}>
                                            <Icon.Button
                                                name="ios-menu"
                                                size={25}
                                                color={COLORS.white}
                                                backgroundColor={COLORS.textColor}
                                                onPress={() => navigation.openDrawer()}
                                            />
                                        </View>
                                    </View>
                                ),
                                headerRight: () => (
                                    <View style={{marginRight: 10}}>
                                            <Icon.Button
                                                name="ios-menu"
                                                size={25}
                                                backgroundColor={COLORS.background}
                                                color={COLORS.textColor}
                                                onPress={() => {}}
                                            />
                                    </View>
                                ),
                        }}
                    />
            </ProfileStack.Navigator>
        );
};

export  {NotificationStackScreen,ProfileStackScreen}
