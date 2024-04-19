import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { width } from '../../utils/constants'
import { Add } from 'iconsax-react-native'

const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="35" color="white"/>
    </TouchableOpacity>
  )
}

export default FloatActionButton

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    bottom: 40,
    right: 20,
    width: width*0.19,
    height: width*0.19,
    backgroundColor: '#FF5B79',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})