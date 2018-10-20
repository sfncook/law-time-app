import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import {setHourlyRate} from '../actions'

const ProfileScreenComponent = class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  onChanged(hourlyRate) {
    this.props.setHourlyRate(hourlyRate);
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
            value={this.props.hourlyRate}
            maxLength={10}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

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

const mapStateToProps = state => {
  return {
    hourlyRate: state.hourlyRate,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setHourlyRate: hourlyRate => {
      dispatch(setHourlyRate(hourlyRate))
    }
  }
};

const ProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreenComponent);

export default ProfileScreen;
