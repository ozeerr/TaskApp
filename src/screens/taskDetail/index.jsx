import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppColors from '../../theme/colors';
import {Button, Divider} from '@ui-kitten/components';
import moment from 'moment';
import {setCategory} from '../../utils/functions';
import {status, taskVlues} from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskDetail = ({route}) => {
  const {item} = route?.params;
  const deleteTask = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks === null) {
        return; 
      }
      const tasks = JSON.parse(savedTasks);

      const filteredTasks = tasks.filter(task => task.id !== item.id);

      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
      console.log('Görev silindi.');
    } catch (error) {
      console.error('Görev silinirken hata oluştu:', error);
    }
  };
  const updateTask = async newStatus => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks === null) {
        return; 
      }
      const tasks = JSON.parse(savedTasks);

      const updatedTasks = tasks.map(task => {
        if (task.id === item.id) {
          return {
            ...task,
            status: newStatus, 
          };
        }
        return task;
      });

      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      console.log('Görev güncellendi:', updatedTasks);
    } catch (error) {
      console.error('Görev güncellenirken hata oluştu:', error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Title:</Text>
          <Text>{item.title}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Description:</Text>
          <Text>{item.description}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Start Date:</Text>
          <Text>{moment(item.startDate).format('DD/MM/YYYY')}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>End Date:</Text>
          <Text>{moment(item.endDate).format('DD/MM/YYYY')}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Category:</Text>
          <Text>{setCategory(item.category)}</Text>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Status:</Text>
          <Text>
            {taskVlues.find(task => task.status === item?.status).title}
          </Text>
        </View>
      </ScrollView>
      <View style={{bottom: 20}}>
        <Button
          onPress={() => updateTask(status.PENDING)}
          style={styles.button}
          status="primary">
          START
        </Button>
        <Button
          onPress={() => updateTask(status.COMPLATED)}
          style={styles.button}
          status="success">
          COMPLATED
        </Button>
        <Button
          onPress={() => updateTask(status.CANCEL)}
          style={styles.button}
          status="danger">
          CANCEL
        </Button>
        <Button onPress={deleteTask} style={styles.button} status="warning">
          DELETE
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    padding: 10,
  },
  button: {
    marginVertical: 5,
  },
});

export default TaskDetail;
