'use strict';

const React = require('react-native');
const {
  StyleSheet,
  Text,
  View,
} = React;

/**
 * A sample app that demonstrates use of the FBSDK login button, native share dialog, and graph requests.
 */
export default React.createClass({
  render: function() {
    return (
      <View style={styles.container} >
        <Text style={styles.text} > let me do it as it would be on the home screen</Text>
      </View>
    );
  }
});

// importing styles
const styles = StyleSheet.create(require('../styles.js'));

