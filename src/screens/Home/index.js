import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FloatActionButton from '../../components/ui/floatActionButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Task } from 'iconsax-react-native'
import TaskCard from '../../components/home/taskCard'
const Home = ({navigation}) => {
    const [tasks,setTasks]=useState([])
    const getTasks = async () => {
        try {
        const savedTask= await AsyncStorage.getItem('tasks')
        setTasks(JSON.parse(savedTask))
        console.log(tasks)
        } catch (error) {
          console.error(error)
        }
    }
 useEffect(()=>{
    getTasks()
 },[])
  return (
    <View style={styles.container}>
      <FlatList
      data={tasks}
      renderItem={({item})=>(
        <TaskCard item={item}/>
      )}
      />
      <FloatActionButton onPress={()=>navigation.navigate("AddTask")} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})