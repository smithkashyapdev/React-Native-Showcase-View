
import { Dimensions ,StyleSheet} from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const ConstantStyle = StyleSheet.create({

    smallTextStyle: {
        fontSize:10,
    },

    medTextStyle: {
        fontSize:14,
    },

    largeTextStyle: {
        fontSize:18,
    },

    extraLargeTextStyle: {
        fontSize:20,
    },

    LinearLayoutVertical:{
        flexDirection:'column'

    },

    LinearLayoutHorizontal:{
        flexDirection:'row'

    }


})
