import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

const NotificationScreen = ({navigation}) => {


    return (
        <ScrollView style={styles.container}>
            <Text >Notification Screen</Text>
        </ScrollView>
    );

}

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});


