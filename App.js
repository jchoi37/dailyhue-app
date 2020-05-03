import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import QuoteScreen from './screens/QuoteScreen'
import  ColorScreen  from './screens/ColorScreen'
const data = require('./quotes.json')

 export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      color: {},
      chosenQuote: {}
    }
    this.moodHandler = this.moodHandler.bind(this)
    this.colorHandler= this.colorHandler.bind(this)
  }

  colorHandler = (color) =>{
    this.setState({color})
  }
  moodHandler = () => {
      const quoteOptions = this.state.color.quote
      const quoteNum = Math.floor(Math.random()*Math.floor(quoteOptions.length))
      const chosenQuote = data.quotes.filter(one =>one.id===quoteOptions[quoteNum])
      this.setState({chosenQuote:chosenQuote.shift()})
  }
  backHandler =() =>{
    this.setState({
      color: {},
      chosenQuote: {}
    })
  }
  //const conditiaonsl for which screen to render

  render() {
   const {chosenQuote} = this.state
   console.log(chosenQuote, "PRERETURN UQOTE?!")
    return (
      <View >
        { chosenQuote.id
        ? <QuoteScreen
        chosenQuote ={chosenQuote}
        backHandler= {this.backHandler}/>
        : <ColorScreen
        colorHandler= {this.colorHandler}
        moodHandler= {this.moodHandler}
        color ={this.state.color}/>
       }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
