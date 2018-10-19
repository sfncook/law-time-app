import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  constructor(props) {
    super(props);
    this.state = {
      hourlyRate:'100',
    }
  }

  onChanged(text) {
    console.log(text);
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={styles.getStartedText}>Your hourly rate:</Text>
        <TextInput
          style={styles.hourlyRateInput}
          keyboardType='numeric'
          onChangeText={(text)=> this.onChanged(text)}
          value={this.state.hourlyRate}
          maxLength={10}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hourlyRateInput: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'right',
    margin: 10,
    height: 30,
    width: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'right',
    margin: 10,
  },
});
