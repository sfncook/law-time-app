import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class AccountsListScreen extends React.Component {
  static navigationOptions = {
    title: 'Accounts',
  };

  constructor(props) {
    super(props);
    this.state = {
      hourlyRate:'100',
    }
  }

  onClickAddAccount() {
    console.log("click onClickAddAccount");
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <Button
          style={styles.addAcctBtn}
          onPress={this.onClickAddAccount}
          title='+ Add Account'
          color='blue'
          accessibilityLabel='Button to add accounts from your device contact list'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addAcctBtn: {
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
  },
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
