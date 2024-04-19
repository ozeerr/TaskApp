import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AddTask from '../screens/AddTask';
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="AddTask" component={AddTask} />
  </Stack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})