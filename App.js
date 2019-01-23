/**
 * Basic React-Native Calculator
 * Created : Bilge Ozan Per
 * Date : 01.23.2019
 * https://github.com/facebook/react-native-basic-calculator
 * 
 * @creator : https://github.com/nrkozan
 * 
 */
import React, { Component } from 'react';
import {StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import {MyButton} from './src/components'; // import custum button from src/components

let ac = 1;

export default class App extends Component {

  constructor(props){
    super(props);

    this.addNumber = this.addNumber.bind(this);
    this.allClear = this.allClear.bind(this);
    this.lastClear = this.lastClear.bind(this);
    this.operate = this.operate.bind(this);
    
  }

 
  state = {
    btnOp : '', // for operate 
    cacheNumber : '', // for second nubmer check upperText stylesheet
    mainNumber : '' // main 
  }

  // press button add btn parameter main number
  addNumber(alfa){

    if(alfa == '.' && this.state.mainNumber[this.state.mainNumber.length - 1] == '.')
    {

    }
    else{
      if(alfa == '.' && this.state.mainNumber == ''){
        this.setState({mainNumber : '0.'});
      }
      else{
        alfa = this.state.mainNumber + alfa;
        this.setState({mainNumber : alfa});
      }
    }
    

  }

  // Ac button for remove all calculation and operation
  allClear(){
    this.setState({mainNumber : ''});
    this.setState({cacheNumber : ''});
    this.setState({btnOp : ''});
  }

    // Last add number remove but Error i'cant fixed
  lastClear(){
    this.setState({mainNumber : (this.state.mainNumber.slice(0, -1))});
  }

    //operate button parameter add operate funciton
  operate(alfa){
    if(alfa == '+'){
      this.setState({cacheNumber : '+ '+this.state.mainNumber});
      this.setState({mainNumber : ''});
      this.setState({btnOp : '+'});
    }
    if(alfa == 'x'){
      this.setState({cacheNumber : 'x '+this.state.mainNumber});
      this.setState({mainNumber : ''});
      this.setState({btnOp : 'x'});
    }
    if(alfa == '/'){
      this.setState({cacheNumber : '/ '+this.state.mainNumber});
      this.setState({mainNumber : ''});
      this.setState({btnOp : '/'});
    }
    if(alfa == '-'){
      this.setState({cacheNumber : '- '+this.state.mainNumber});
      this.setState({mainNumber : ''});
      this.setState({btnOp : '-'});
    }

    //find operate for btnOp, to parse remove cacheNumber get first two character
    if(alfa == '='){
      if(this.state.cacheNumber != '' && this.setState.btnOp != '')
      {
        let x,y;
        x = parseFloat(this.state.mainNumber);
        y = parseFloat(this.state.cacheNumber.substring(2));
        switch(this.state.btnOp) {
          case '+':
          this.setState({mainNumber : (x+y)});
          this.setState({cacheNumber : ''});
          this.setState({btnOp : ''});
            break;
          case '-':
          this.setState({mainNumber : (y-x)});
          this.setState({cacheNumber : ''});
          this.setState({btnOp : ''});
            break;
          case 'x':
          this.setState({mainNumber : (x*y)});
          this.setState({cacheNumber : ''});
          this.setState({btnOp : ''});
            break;
          case '/':
          this.setState({mainNumber : (y/x)});
          this.setState({cacheNumber : ''});
          this.setState({btnOp : ''});
            break;
          default:
        }
      }
    }
  }
  

  /*
  View Design sample from bootstrap reponsive
  All layout full reponsive not can't width or height
  */

  render() {
    return (
      <View style={s.contanier}>
        <View style={{flexDirection: 'row',flex : 2}}>
            <View style={[s.col1,s.libertiy,s.headText]}>
              <Text style={s.upperText}>{this.state.cacheNumber}</Text>
              <Text style={s.resultText}>{this.state.mainNumber}</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row',flex : 1}}>
            <View style={[s.col2,s.swihte]}><MyButton onPress={() => this.allClear()} TextColor={'#ff5252'} Color={'white'} Text={'AC'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.lastClear()}  Color={'white'} Text={'C'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.operate('+')} Color={'white'} Text={'+'}></MyButton></View>
        </View>
        <View style={{flexDirection: 'row',flex : 1}}>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.addNumber(1)} Color={'white'} Text={'1'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.addNumber(2)} Color={'white'} Text={'2'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.addNumber(3)} Color={'white'} Text={'3'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.operate('-')} Color={'white'} Text={'-'}></MyButton></View>
        </View>
        <View style={{flexDirection: 'row',flex : 1}}>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.addNumber(4)} Color={'white'} Text={'4'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.addNumber(5)} Color={'white'} Text={'5'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.addNumber(6)} Color={'white'} Text={'6'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.operate('x')} Color={'white'}  Text={'x'}></MyButton></View>
        </View>
        <View style={{flexDirection: 'row',flex : 1}}>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.addNumber(7)} Color={'white'} Text={'7'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.addNumber(8)} Color={'white'} Text={'8'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.addNumber(9)} Color={'white'} Text={'9'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.operate('/')} Color={'white'} Text={'/'}></MyButton></View>
        </View>
        <View style={{flexDirection: 'row',flex : 1}}>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.addNumber('.')} Color={'white'} Text={'.'}></MyButton></View>
            <View style={[s.col1,s.swihte]}><MyButton onPress={() => this.addNumber(0)} Color={'white'} Text={'0'}></MyButton></View>
            <View style={[s.col2]}><MyButton onPress={() => this.operate('=')} TextColor={'#fff'} Color={'#ff5252'} Text={'='}></MyButton></View>
        </View>
        
   
      </View>
    )
  }
}

const s = StyleSheet.create({
    contanier:{
        flex:12,
        flexDirection: 'column',
        backgroundColor:'#f7f1e3'
    },
    headText:{
      justifyContent : 'flex-end',
      alignItems:'flex-end',
      alignContent:'center',
      paddingRight:20
    },
    upperText:{
      justifyContent : 'flex-end',
      alignItems:'center',
      alignContent:'center',
      fontSize:30,
      color:'#fff'
  
    },
    resultText:{
        justifyContent : 'flex-end',
        alignItems:'center',
        alignContent:'center',
        fontSize:40,
        color:'#fff'
    },
    col1:{
      flex : 1
    },
    col2:{
      flex : 2,
    },
    col3:{
      flex : 3,
    },
    libertiy:{
      backgroundColor:'#74972F'
    },
    devilblue:{
      backgroundColor:'#227093'
    },
    summersky:{
      backgroundColor:'#34ace0'
    },
    flured:{
      backgroundColor:'#ff5252'
    },
    fire:{
      backgroundColor:'#cd6133',
      
    },
    grey:{
      backgroundColor:'#84817a'
    },
    palm:{
      backgroundColor:'#218c74'
    },
    lucky:{
      backgroundColor:'#2c2c54'
    },
    desert:{
      backgroundColor:'#ccae62'
    },
    swihte:{
      backgroundColor:'#f7f1e3'
    }

});