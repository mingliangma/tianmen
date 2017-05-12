import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

import ViewTransformer from 'react-native-view-transformer';
import Image from 'react-native-transformable-image';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

import MapImage from './map.jpg';
import Constants from '../../common/constants.js';

import MapMarker from '../../components/MapMarker';

const styles = StyleSheet.create({
})

const MARKER_TOP_START = 160;
const MARKER_TOP_2_START = 212;

class ParkMap extends Component {
  constructor (props) {
    super(props);
    console.log(MapImage);
    this.state = { 
        markerScale: 1, 
        markerTop: MARKER_TOP_START, 
        currScale: 0, 
        markerHeight: 48, 
        markerWidth: 30, 
        markerLeft: 82,
        showDetail: false,

        markerTop2: MARKER_TOP_2_START,
        marker2Left: 147
    };
  }

  render () {
    return (
        <View>
            <Image
                style={{ width: Constants.winWidth, height: 500 }}
                source={require('./map.jpg')}
                pixels={{width: 1476, height: 1519}}
                enableTransform = {true}
                enableScale = {true}
                enableTranslate = {true}
                ref={(map) => { this.mapImage = map; }}
                onViewTransformed = {(translate) => {
                    let targetScale = 1/translate.scale;
                    if ( translate.scale !== this.state.currScale){
                        let targetTop = MARKER_TOP_START;
                        let targetTopTwo = MARKER_TOP_2_START;
                        if ( translate.scale > 0.99999999999) {
                            let markerTopOffset = 48 * ( 1- targetScale)/2;
                            targetTop = MARKER_TOP_START + markerTopOffset;
                            targetTopTwo = MARKER_TOP_2_START + markerTopOffset;
                        // console.log(`translate back: ${JSON.stringify(translate, null, 2)}`);
                        } 
                        // console.log(`translate: ${JSON.stringify(translate, null, 2)}`);
                        // console.log(`scale change from ${this.state.currScale} to ${translate.scale}`);
                        // console.log(`markerTop change from ${this.state.markerTop} to ${targetTop}`);
                        this.setState({
                            markerScale : 1/translate.scale, 
                            currScale: translate.scale, 
                            markerTop: targetTop,
                            markerTop2: targetTopTwo
                        });
                    } 
                }}
            >
            <MapMarker
                // style={{width: this.state.markerWidth, height: this.state.markerHeight, top: this.state.markerTop, left: 100}}
                style={{width: this.state.markerWidth, height: this.state.markerHeight, top: this.state.markerTop2, left: this.state.marker2Left, transform: [
                    { scale: this.state.markerScale }
                ]}}
                onPress={()=>{
                    // this.popupDialog.show();
                    this.props.onPressMarkerPenJing();
                    // this.setState({showDetail: true})
                    // this.mapImage.refs.viewTransformer.updateTransform({translateX: 10, translateY: 20});
                }}
            />
            <MapMarker
                // style={{width: this.state.markerWidth, height: this.state.markerHeight, top: this.state.markerTop, left: 100}}
                style={{width: this.state.markerWidth, height: this.state.markerHeight, top: this.state.markerTop, left: this.state.markerLeft, transform: [
                    { scale: this.state.markerScale }
                ]}}
                onPress={()=>{
                    // this.popupDialog.show();
                    this.props.onPressMarker();
                    // this.setState({showDetail: true})
                    // this.mapImage.refs.viewTransformer.updateTransform({translateX: 10, translateY: 20});
                }}
            />
            </Image>
        </View>
    )
  }
}

        //   <Image 
        //         style={{width: 30, height: 30, left: 100, top: 100 }}
        //         source={require('./map-marker.jpg')} 
        //         pixels={{width: 256, height: 256}}
        //         maxScale = {1}
        //         enableScale={false}
        //         enableResistance={true}
        //   />

function mapDispatchToProps (dispatch) {
  return {
  dispatch}
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps, mapStateToProps)(ParkMap)
