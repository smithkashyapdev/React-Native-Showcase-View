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

const ProfileScreen = ({navigation}) => {


    return (
        <ScrollView style={styles.container}>
            <Text >Profile Screen</Text>
        </ScrollView>
    );

}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});


