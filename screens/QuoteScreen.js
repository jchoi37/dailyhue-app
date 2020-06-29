import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const QuoteScreen = props => {

  return (
    <View style={styles.container}>
      <View style={styles.quoteContainer}>
        <Text>{props.chosenQuote.quote}</Text>
        <br/>
        <Text>{props.chosenQuote.author}</Text>
      </View>
      <View style ={styles.button}>
      <Button
      title="Back"
      onPress={props.backHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quoteContainer:{
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems:'center'
  },
  button: {
    width: 100
  }
});

export default QuoteScreen
