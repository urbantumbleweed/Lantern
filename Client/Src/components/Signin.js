'use strict';

const React = require('react-native');
const {
  StyleSheet,
  Text,
  View,
} = React;

const Login = require('./Login-button');

/**
 * A sample app that demonstrates use of the FBSDK login button, native share dialog, and graph requests.
 */
const Signin = React.createClass({
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text} >We dont need no stinking image background yet!!</Text>
        <Login style={styles.loginContainer}/>
      </View>
    );
  }
});

// importing styles
const styles = StyleSheet.create(require('../styles.js'));

module.exports = Signin;
