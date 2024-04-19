import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import { Button, Input, Radio, RadioGroup } from '@ui-kitten/components'
import CustomDatePicker from '../../components/ui/customDatePicker'
import taskSchema from '../../utils/validations'
import AsyncStorage from '@react-native-async-storage/async-storage'


const AddTask =  () => {
    const saveTask=async(values)=>{
        try {
            await AsyncStorage.setItem('task',JSON.stringify(values))
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <View style={styles.container}>
      <Formik
         initialValues={{
            id:"",
            description:"",
            title:"",
            startDate:null,
            endDate:null,
            category:null,
            status:""
        }}
       validationSchema={taskSchema}
        onSubmit={values=>saveTask(values)}>
    {({handleChange,handleSubmit, values, errors,setFieldValue})=>(
        <View style={{gap:20}}>
            <Input
            multiline
            size='large'
            style={{marginTop:20}}
            value={values.title}
            label={"Title"}
            placeholder=''
            onChangeText={handleChange('title')}
            status={errors.title?"danger":"basic"}
            caption={errors.title}
            />
                <Input
            multiline
            size='large'
            value={values.description}
            label={"Description"}
            placeholder=''
            onChangeText={handleChange('description')}
            status={errors.description?"danger":"basic"}
            caption={errors.description}
            />
            <CustomDatePicker
            size='large'
            date={values.startDate}
            label={"Start Date"}
            onSelect={date=>setFieldValue('startDate',date)}
            status={errors.startDate?"danger":"basic"}
            caption={errors.startDate}
            />
             <CustomDatePicker
            size='large'
            date={values.endDate}
            label={"End Date"}
            onSelect={date=>setFieldValue('endDate',date)}
            status={errors.endDate?"danger":"basic"}
            caption={errors.endDate}
            />

            <View style={{gap:3}}>
            <RadioGroup style={[errors.category&&{borderWidth:1,borderColor:"red",borderRadius:5},{padding:10}]} selectedIndex={values.category} onChange={index=>setFieldValue("category",index)}>
                <Radio>Software</Radio>
                <Radio>School</Radio>
                <Radio>Daily</Radio>
            </RadioGroup>
            {errors.category && <Text style={{color:'red',fontSize:12,fontWeight:300}}>{errors.category}</Text>}
            </View>
            <Button 
            onPress={handleSubmit}
            >Save</Button>
        </View>
    )}
      </Formik>
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:10,
    }
})