import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class AddAccountScreen extends React.Component {

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
    console.log("click onClickAddAccount");
    navigate('Profile');
  }


  render() {
    return (
      <View>
        <FlatList
          data={[
            {key:'1', name: 'Adams, Alan', isAcct:false},
            {key:'2', name: 'Baugh, Bo', isAcct:false},
            {key:'3', name: 'Smith, Sally', isAcct:true},
          ]}
          renderItem={({item}) =>
            <View style={styles.contactRow}>
              <Text style={styles.std}>{item.name}</Text>
            </View>
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
});
