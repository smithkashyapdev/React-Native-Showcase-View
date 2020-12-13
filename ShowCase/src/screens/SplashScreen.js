import React, { useState, useEffect,useContext } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';



const SplashScreen = ({ route, navigation }) => {

    useEffect(() => {
        console.log(route.params.screenTag)
       setTimeout(()=>{
           navigation.reset({
               index: 0,
               routes: [{name: route.params.screenTag}],
           });
       },1500)


    }, []);

    return (<View style={styles.container} >

        <StatusBar backgroundColor='#f5929f'/>
        <Image
            source={require('../assets/bg_splash/ic_splashbg.png') }
        />
    </View>);

}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: "center", justifyContent: "center"
    },
    logo: {
        width: 66,
        height: 58,
    }
})

export default SplashScreen;
