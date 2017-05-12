import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
// import Image from 'react-native-transformable-image';

const MapMarker = (props) => {
  return <TouchableWithoutFeedback onPress={props.onPress}>
        <Image 
            source={require('./map-marker.png')} 
            {...props}
        >
        </Image>
    </TouchableWithoutFeedback>;
}

export default MapMarker;
