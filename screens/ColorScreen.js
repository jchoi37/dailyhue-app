import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity} from 'react-native';

const data = require('../colors.json')

export default function ColorScreen (props) {
  console.log(props.color.id, "COLROE IDDD")
  return (
    <View style={styles.container}>
      <Text>Choose your Mood</Text>
      <View style = {styles.buttonContainer}>
        <FlatList
         data = {data.colorList}
         renderItem = {({item}) => (
          <View

          style={[styles.buttonWrap,
          props.color.id ===item.id ? styles.active : styles.not]}
          >
          <TouchableOpacity
          style = {[styles.button,
          {backgroundColor : item.color}
          ]}
          onPress={()=>props.colorHandler(item)}
          />
          </View>
        )}
          numColumns={5}
          />
      </View>
      <Button
      title="Inspire Me"
      onPress={props.moodHandler}/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap:'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
