import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskCard = ({item}) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

export default TaskCard

const styles = StyleSheet.create({})