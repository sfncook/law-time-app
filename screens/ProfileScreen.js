import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.hourlyRateLabel}>Your hourly rate:      $</Text>
          <TextInput
            style={styles.hourlyRateInput}
            keyboardType='numeric'
            onChangeText={(text)=> this.onChanged(text)}
            value={this.state.hourlyRate}
            maxLength={10}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  hourlyRateInput: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
    marginTop: 15,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 0,
    height: 30,
    width: 80,
    backgroundColor: 'white',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
  hourlyRateLabel: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'right',
    marginTop: 20,
    marginRight: 3,
    marginBottom: 10,
    marginLeft: 15,
  },
});
