import React from 'react';
import { Image, TouchableOpacity, View, Text, Button } from 'react-native';
// import Image from 'react-native-transformable-image';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';


const AttractionPopup = (props) => {
    let images = {
      tianmendong: require('./tianmendong.jpeg'),
      penjingshiqu: require('./penjingshiqu.jpg')
    }
  return <PopupDialog 
            width={250}
            dialogTitle={<DialogTitle title={props.title} />}
            show={props.show} 
            onDismissed={props.onDismissed}
        >
          <View style={{width: 250}}>
            <Image 
                style={{width: 250}}
                source={images[props.image]}
                resizeMode={'contain'}
            >
            </Image>
            <Text>
               {`关于${props.title}`}
            </Text>
            <Button
              onPress={() => {props.onClickDetail(props.name);}}
              title="详情"
              color="#841584"
              accessibilityLabel="Learn more about this attraction"
            />
          </View>
        </PopupDialog>;
}

export default AttractionPopup;
