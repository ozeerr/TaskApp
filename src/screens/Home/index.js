import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FloatActionButton from '../../components/ui/floatActionButton'
import { useNavigation } from '@react-navigation/native'

const Home = ({navigation}) => {
   
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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