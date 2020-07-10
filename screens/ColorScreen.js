import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity} from 'react-native';
import {ColorPicker} from 'react-native-color-picker'
const data = require('../colors.json')




export default function ColorScreen (props) {
  return (
    <View style={styles.container}>
      <Text>Choose your Mood</Text>
      <ColorPicker
      oldColor='purple'
      onColorSelected={color => alert(`Color selected: ${color}`)}
      style={{flex: 1}}
    />

      <Button
      title="Inspire Me"
      onPress={props.moodHandler}/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom:30
  },
  buttonContainer: {
    alignItems: 'flex-start',
    justifyContent:'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 500,
    padding: 30
  },
  buttonWrap: {
    flex:1,
    flexWrap:'wrap',
    flexShrink:0,
    alignSelf: 'stretch',
    height: 75,
    width: 75
  },
  button: {
    height: 75,
    flex:1,
    flexDirection:'row',
    alignSelf:'stretch'
  },
  active :{
    borderWidth: 2,
    borderColor:'black'
  },
  not :{
    borderWidth: 0,
    borderColor:'black'
  }
})
