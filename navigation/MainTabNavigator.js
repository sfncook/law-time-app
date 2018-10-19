import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AccountsListScreen from '../screens/AccountsListScreen';
import AddAccountScreen from '../screens/AddAccountScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';


// icon list: https://oblador.github.io/react-native-vector-icons/

const ProfileStack = createStackNavigator({
  screen: ProfileScreen,
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


const AccountsListStack = createStackNavigator({
  screen: AccountsListScreen,
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



const AddAccountStack = createStackNavigator({
  screen: AddAccountScreen,
});


AddAccountStack.navigationOptions = {
  tabBarLabel: 'AddAccount',
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
  headerTitle: 'foo-bar',
  tabBarVisible: false,
};

const SettingsStack = createStackNavigator({
  screen: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  Profile: ProfileStack,
  AccountsList: AccountsListStack,
  Settings: SettingsStack,
  AddAccount: AddAccountStack,
});

