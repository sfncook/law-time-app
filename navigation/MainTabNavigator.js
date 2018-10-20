import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AccountsListScreen from '../screens/AccountsListScreen';
import AddAccountScreen from '../screens/AddAccountScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AccountDetailScreen from "../screens/AccountDetailScreen";


// icon list: https://oblador.github.io/react-native-vector-icons/

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});


ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-man${focused ? '' : '-outline'}`
          : 'md-man'
      }
    />
  ),
};


const AddAccountStack = createStackNavigator({
  screen: AddAccountScreen,
});

const AccountDetailStack = createStackNavigator({
  screen: AccountDetailScreen,
});


const AccountsListStack = createStackNavigator({
  AccountsList: AccountsListScreen,
  AddAccount: AddAccountStack,
  AccountDetail: AccountDetailStack,
});


AccountsListStack.navigationOptions = {
  tabBarLabel: 'Accounts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list${focused ? '' : '-outline'}`
          : 'md-list'
      }
    />
  ),
};



export default createBottomTabNavigator({
  Profile: ProfileStack,
  AccountsList: AccountsListStack,
});

