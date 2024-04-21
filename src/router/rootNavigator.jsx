import * as React from 'react';
import Home from '../screens/home';
import {ADDTASKS, TASKDETAİL, TASKS} from '../utils/routes';
import AddTask from '../screens/addTask';
import TaskDetail from '../screens/taskDetail';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TASKS} component={Home} />
      <Stack.Screen name={ADDTASKS} component={AddTask} />
      <Stack.Screen name={TASKDETAİL} component={TaskDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
