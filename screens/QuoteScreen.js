import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const QuoteScreen = props => {

  return (
    <View style={styles.container}>
      <View>
        <Text>{props.chosenQuote.quote}</Text>
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
  button: {
    width: 100
  }
});

export default QuoteScreen
