import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable-unmountable';


export default class App extends React.Component {
  state = {
    mounted: true
  }

  render () {
    return (
      <View style={styles.container}>
        <Button title="Toggle" onPress={this.onPress}  />
        <View style={styles.textContainer}>
          <Animatable.Text
            mounted={this.state.mounted}
            animation='flipInY'
            duration={2000}
            unmountAnimation='flipOutY'
            unmountDuration={2000}
          >
            If you're going through hell, keep going
          </Animatable.Text>
        </View>
      </View>
    );
  }

  onPress = () => {
    this.setState({ mounted: !this.state.mounted });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
