'use strict';

import React, { Component, Navigator, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import { connect } from 'react-redux';

import {
  Router,
  Route,
  Schema,
  Animations,
  TabBar
} from 'react-native-router-flux';

// Components
import Home from '../components/Home';
import Signin from '../components/Signin';
import CurrentLocation from '../components/get-location';

// @connect(state => ({
//   state: state.counter
// }))
class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Router hideNavBar={true}>
          <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
          <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
          <Schema name="withoutAnimation"/>

          <Route name="signin" component={Signin} initial={true} wrapRouter={true} title="Signin"/>
          <Route name="home" component={Home} title="HOME"/>
          <Route name="currentLocation" component={connect(getCurrentLocation())(CurrentLocation)} title="Current Location" Schema='default'/>

      </Router>
    );
  }
}

export default connect(state => ({
    state: state.currentLocation
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Main);
