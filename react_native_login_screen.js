import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Image,TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

<Text style={styles.welcome} > Login or Signup</Text>

<TextInput style={styles.input} placeholder={'Please Enter Email'}   />
<TextInput style={styles.input} placeholder={'Please Enter Password'}  />
<View style={styles.buttonContainer}>
<TouchableOpacity style={styles.userbutton}>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.userbutton}>
<Text style={styles.buttonText}>Signup</Text>
</TouchableOpacity>
</View>


    </View>
  );   
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#584e69',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
    color:'#fff'
    
  },
  input:{
    width:'90%',
    backgroundColor:'#fff',
    padding:10,
    margin:10,
    borderRadius:10
  },
  userbutton:{
    backgroundColor:'#39b961',
    padding:'5%',
    paddingLeft:60,
    paddingRight:60,
    borderRadius:20,
    
  },
  buttonContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:'90%'
  },
  buttonText:{
    color:'#fff'
  }

});
