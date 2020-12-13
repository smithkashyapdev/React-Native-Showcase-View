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
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from 'react-native-maps';
const ExploreScreen = ({navigation}) => {

    const initialMapState = {
        region: {
            latitude: 22.62938671242907,
            longitude: 88.4354486029795,
            latitudeDelta: 0.04864195044303443,
            longitudeDelta: 0.040142817690068,
        }
    }

    const _map = React.useRef(null);
    const [state, setState] = React.useState(initialMapState);

    return (
        <View style={styles.container}>
            <MapView
                ref={_map}
                initialRegion={state.region}
                style={styles.container}
                provider={PROVIDER_GOOGLE}
            >
            </MapView>
        </View>
    );

}

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


