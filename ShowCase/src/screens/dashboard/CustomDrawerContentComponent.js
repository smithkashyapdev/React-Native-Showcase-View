import React ,{useState } from 'react';
import { Text, View, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native'

const CustomDrawerComponent = (props) => {

    console.log(props.navigation)
    const [isHomeSelected, setHomeSelected] = useState(true);
    const [isNotiSelected, setNotiSelected] = useState(false);
    const [isProfileSelected, setProfileSelected] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground  style={{flex: 1, width: 280, justifyContent: 'center'}} >
                    <Text style={styles.headerText}>Header Portion</Text>
                    <Text style={styles.headerText}>You can display here logo or profile image</Text>
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>

                <TouchableOpacity style={[styles.screenStyle,  isHomeSelected===true?styles.activeBackgroundColor:""]}   onPress={()=>{
                    props.navigation.closeDrawer();
                    props.navigation.navigate('HomeTab')
                    setNotiSelected(false)
                    setHomeSelected(true)
                    setProfileSelected(false)
                }}>
                <View style={[styles.screenStyle]}   >
                    <Text style={[styles.screenTextStyle]}>Home</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.screenStyle,  isNotiSelected===true?styles.activeBackgroundColor:""]}   onPress={()=>{
                                      props.navigation.closeDrawer();
                                      props.navigation.navigate('Notifications')
                                      setNotiSelected(true)
                                      setHomeSelected(false)
                                      setProfileSelected(false)
                 }}>
                    <View style={[styles.screenStyle]}   >
                        <Text style={[styles.screenTextStyle]}>Notifications</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.screenStyle,  isProfileSelected===true?styles.activeBackgroundColor:""]}
                                  onPress={ ()=>{
                                      props.navigation.closeDrawer();
                                      props.navigation.navigate('Profile')
                                      setNotiSelected(false)
                                      setHomeSelected(false)
                                      setProfileSelected(true)
                                  }}
                >

                    <View style={[styles.screenStyle]}   >
                        <Text style={[styles.screenTextStyle]}>Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: {
        paddingTop: 20,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20,
        textAlign: 'center'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#00adff'
    },
    activeBackgroundColor: {
        backgroundColor: 'grey'
    }
});

export default CustomDrawerComponent;



