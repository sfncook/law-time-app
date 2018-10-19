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
            {key:'1', name: 'Adams, Alan', phone:'612-111-1234', dur:'10', bal:'15'},
            {key:'2', name: 'Baugh, Bo', phone:'612-222-1234', dur:'20', bal:'25'},
            {key:'3', name: 'Smith, Sally', phone:'612-333-1234', dur:'30', bal:'35'},
          ]}
          renderItem={({item}) =>
            <View style={styles.acctRow}>
              <View style={styles.acctRowLeftCol}>
                <Text style={styles.std}>{item.name}</Text>
                <Text style={styles.std}>{item.phone}</Text>
              </View>
              <View style={styles.acctRowRightCol}>
                <Text style={styles.dur}>{item.dur} min</Text>
                <Text style={styles.bal}>${item.bal}</Text>
              </View>
            </View>
          }
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
  flexGridThirds: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexGridThirdsCol: {
    width: '32%'
  },
  addAcctBtn: {
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
  },
  acctRow: {
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 2,
    flex: 1,
    flexDirection: 'row',
  },
  acctRowLeftCol: {
    flex: 1,
    flexDirection: 'column',
  },
  acctRowRightCol: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dur: {
    margin:5,
  },
  bal: {
    margin:5,
  },

});
