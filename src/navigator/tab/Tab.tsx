import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from '@theme';
import { TabParamList, TabBarStatus } from './Tab.typeDefs';
import { HomeStackNavigator, ProfileStackNavigator } from '../stack/Stack';

const Tab = createBottomTabNavigator<TabParamList>();

const renderTabBarIcon = (tabName: keyof TabParamList) => (tabStatus: TabBarStatus) => {
  switch (tabName) {
    case 'HomeTab':
      return <Entypo name="wallet" size={24} color={tabStatus.color} />;
    case 'ProfileTab':
      return <FontAwesome6 name="money-bill-transfer" size={24} color={tabStatus.color} />;
  }
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: renderTabBarIcon(route.name),
        headerShown: false,
        tabBarInactiveTintColor: colors.gray,
        tabBarInactiveBackgroundColor: colors.white,
        tabBarActiveTintColor: colors.lightPurple,
        tabBarActiveBackgroundColor: colors.white,
      })}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeStackNavigator}
        options={{ title: "Wallet" }}
      />
      <Tab.Screen
        name='ProfileTab'
        component={ProfileStackNavigator}
        options={{ title: "Transaction" }}
      />
    </Tab.Navigator>
  );
}
