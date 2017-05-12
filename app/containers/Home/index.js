import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, StyleSheet} from 'react-native';
import ViewTransformer from 'react-native-view-transformer';
import Image from 'react-native-transformable-image';

import { Actions } from 'react-native-router-flux';

/**
 * containers
 */
import ParkMap from '../ParkMap';
import Constants from '../../common/constants.js';

/**
 * components
 */
import AttractionPopup from '../../components/AttractionPopup'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    textAlign: 'center'
  }
})

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {showPopup: false, title: '', image: 'tianmendong'};
  }

  render () {
    return (
      <View style={styles.container}>
       <ParkMap
         onPressMarker = {()=> {
           console.log('here tian men dong');
           this.setState({showPopup: true, title: "天门洞", image: "tianmendong", popupName: "tianmendong"})
         }}
         onPressMarkerPenJing = {() => {
           console.log('here pen jing shi');
           this.setState({showPopup: true, title: "盆景石区", image:"penjingshiqu", popupName: "penjingshiqu"})
         }}
       >
       </ParkMap>
       <AttractionPopup 
         show={this.state.showPopup}
         image={this.state.image}
         name={this.state.popupName}
         onDismissed={() => {
           this.setState({showPopup: false})
         }}
         title={this.state.title}
         onClickDetail={(name) => {
            Actions.attractionDetail({attractionName: name});
           this.setState({showPopup: false});
         }}
       />
      </View>
    )
  }
}
            // <Text style={styles.text}>
            //   Home View
            // </Text>
function mapDispatchToProps (dispatch) {
  return {
  dispatch}
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps, mapStateToProps)(Home)
