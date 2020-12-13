import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
import SwiperView from '../../components/SwiperView';



const HomeScreen = ({navigation}) => {

    function getBannerList():Array{
        const bannerListArray = [
            {image:require('../../assets/banner/ic_banner_1.png')},
            {image:require('../../assets/banner/ic_banner_2.png')},
            {image:require('../../assets/banner/ic_banner_3.png')}
        ];


        return bannerListArray
    }


    return (
        <View style={styles.container}>
            <SwiperView imagelist={getBannerList()}/>
        </View>
    );

}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});


