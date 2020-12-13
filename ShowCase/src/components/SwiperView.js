import React from 'react';
import { View,Text, StyleSheet,StatusBar,Image,ScrollView} from 'react-native';


import Swiper from 'react-native-swiper'

const SwiperView=(props)=>{

    console.log("swiper props---"+ props.imagelist.length)

    const slidesView=props.imagelist.map( ( item )=>{
        console.log({item})
        return(
            <View style={styles.slide}>
                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={styles.sliderImage}
                />
            </View>
        )
    })
    return (
        <ScrollView style={styles.container}>

            <View style={styles.sliderContainer}>
                <Swiper
                    autoplay={true}
                    horizontal={true}
                    height={200}
                    activeDotColor="#b2b2b2">
                    {slidesView}
                </Swiper>
            </View>
        </ScrollView>)
}

const styles = StyleSheet.create({
    wrapper: {},
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    }
})


export default SwiperView;