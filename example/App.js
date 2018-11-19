import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import unmountAnimatable from 'react-native-unmount-animatable';

const AnimatableView = unmountAnimatable(View);

export default class App extends React.Component {
  render() {
    return (
      <AnimatableView style={styles.container} animation='fadeIn'>
        <Text>Open up App.js to start working on your app!</Text>
      </AnimatableView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
