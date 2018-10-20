import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import connect from "react-redux/es/connect/connect";

const AccountsListScreenComponent = class AccountsListScreen extends React.Component {
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
    const { push } = this.props.navigation;
    push('AddAccount');
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
          data={this.props.accounts}
          renderItem={({item}) =>
            <TouchableHighlight onPress={
              ()=>{
                const { push } = this.props.navigation;
                push('AccountDetail', item);
              }
            }>
              <View style={styles.acctRow}>
                <View style={styles.acctRowLeftCol} >
                  <Text style={styles.std}>{item.name}</Text>
                  <Text style={styles.std}>{item.phone}</Text>
                </View>
                <View style={styles.acctRowRightCol}>
                  <Text style={styles.dur}>{item.dur} min</Text>
                  <Text style={styles.bal}>${item.bal}</Text>
                </View>
              </View>
            </TouchableHighlight>
          }
        />
        <Button
          style={styles.addAcctBtn}
          onPress={this.onClickAddAccount.bind(this)}
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

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    // setHourlyRate: hourlyRate => {
    //   dispatch(setHourlyRate(hourlyRate))
    // }
  }
};

const AccountsListScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountsListScreenComponent);

export default AccountsListScreen;
