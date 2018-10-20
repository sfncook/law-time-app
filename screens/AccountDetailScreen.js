import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text, TouchableHighlight,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default class AccountDetailScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    console.log('detail this.props.navigation.state:', this.props.navigation.state);
    this.state = {
      hourlyRate:'100',
    }
  }

  render() {
    return (
      <View style={styles.formView}>
        <Text style={styles.formItem}>Smith, Sally</Text>
        <Text style={styles.formItem}>(mobile) 619-222-1234</Text>
        <Text style={styles.formItem}>(home) 619-333-5678</Text>
        <Text style={styles.formItem}>Charged 30min</Text>
        <Text style={styles.formItem}>Balance $50</Text>
        <Text style={styles.formItem}>UNcharged 10min</Text>
        <FlatList
          data={[
            {key:'1', phone:'619-222-1234', date:'Sat Oct 20, 2018 17:00', durMin:10, isCharged:true},
            {key:'2', phone:'619-222-1234', date:'Sat Oct 20, 2018 17:00', durMin:20, isCharged:false},
            {key:'3', phone:'619-222-1234', date:'Sat Oct 20, 2018 17:00', durMin:30, isCharged:true},
            {key:'4', phone:'619-222-1234', date:'Sat Oct 20, 2018 17:00', durMin:40, isCharged:false},
            {key:'5', phone:'619-222-1234', date:'Sat Oct 20, 2018 17:00', durMin:50, isCharged:true},
          ]}
          renderItem={
            ({item}) => {
              let iconStr;
              let iconColor;
              let chargedText;
              if(item.isCharged) {
                iconStr = 'ios-checkmark-circle';
                iconColor = 'green';
                chargedText = 'CHARGED';
              } else {
                iconStr = 'ios-close-circle';
                iconColor = 'red';
                chargedText = 'NO-CHARGE';
              }

              return <TouchableHighlight onPress={
                ()=>{
                  console.log('click call');
                }
              }>
                <View style={styles.callRow}>
                  <View style={styles.callRowLeftCol} >
                    <Text style={styles.std}>{item.phone}</Text>
                    <Text style={styles.std}>{item.date}</Text>
                  </View>
                  <View style={styles.callRowRightCol}>
                    <View style={styles.charged}>
                      <Text style={styles.contactName}>{chargedText}</Text>
                      <Ionicons style={styles.chargedIcon} name={iconStr} size={20} color={iconColor} />
                    </View>
                    <Text style={styles.bal}>{item.durMin}min / ${item.durMin}</Text>
                  </View>
                </View>
              </TouchableHighlight>;
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
  },
  formView: {
    flexDirection: 'column',
  },
  formItem: {
    fontSize: 18,
    margin: 5,
  },
  callRow: {
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 2,
    flex: 1,
    flexDirection: 'row',
  },
  callRowLeftCol: {
    flex: 1,
    flexDirection: 'column',
  },
  callRowRightCol: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  charged: {
    flexDirection:'row',
  },
  chargedIcon: {
    marginLeft: 5,
  },
});
