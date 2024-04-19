import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Datepicker } from '@ui-kitten/components'

const CustomDatePicker = (props) => {
  return (
      <Datepicker {...props} />
  )
}

export default CustomDatePicker

const styles = StyleSheet.create({})