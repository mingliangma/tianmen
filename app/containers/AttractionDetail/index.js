import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

import ViewTransformer from 'react-native-view-transformer';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

import Constants from '../../common/constants.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64
    }
});

const MARKER_TOP_START = 160;
const MARKER_TOP_2_START = 212;

class AttractionDetail extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let info = {
            image: null,
            des: ''
        };

        if (this.props.attractionName === 'penjingshiqu') {
            info.image =  require('./penjingshiqu.jpg')
            info.des = '盆景石区介绍';
        } else if (this.props.attractionName === 'tianmendong') {
            info.image =  require('./tianmendong.jpeg')
            info.des = '天门洞介绍';
        }

        return (
            <View style={styles.container}>
              <Image 
                style={{width: Constants.winWidth}}
                source={info.image}
                resizeMode={'cover'}
              /> 
              <Text style={{marginTop: 20}}>
                {info.des}
              </Text>
            </View>
        );
    }
}

export default AttractionDetail;

