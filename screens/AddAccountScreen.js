import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import {setHourlyRate} from "../actions";

const AddAccountScreenComponent = class AddAccountScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Contacts',
  };

  constructor(props) {
    super(props);
    this.state = {
      hourlyRate:'100',
    }
  }

  onClickAddAccount() {
    const { navigate } = this.props.navigation;
    navigate('Profile');
  }


  render() {
    return (
      <View>
        <FlatList
          data={this.props.contacts}
          renderItem={
            ({item}) => {
              let iconStr;
              let iconColor;
              if(item.isAcct) {
                iconStr = 'ios-checkmark-circle';
                iconColor = 'green';
              } else {
                iconStr = 'ios-close-circle';
                iconColor = 'red';
              }

              return <View style={styles.contactRow}>
                <Ionicons name={iconStr} size={20} color={iconColor} />
                <Text style={styles.contactName}>{item.name}</Text>
              </View>;
            }
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contactRow: {
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 2,
    flex: 1,
    flexDirection: 'row',
  },
  contactName: {
    marginTop: 3,
    marginLeft: 5,
  }
});

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    // setHourlyRate: hourlyRate => {
    //   dispatch(setHourlyRate(hourlyRate))
    // }
  }
};

const AddAccountScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAccountScreenComponent);

export default AddAccountScreen;
