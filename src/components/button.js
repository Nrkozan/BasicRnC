import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableOpacity} from 'react-native'

export class MyButton extends Component {
  render() {
    return (
     
        <TouchableOpacity onPress={this.props.onPress} style={[s.main,{backgroundColor:this.props.Color}]}>
          <Text style={[s.font,{color:this.props.TextColor}]}>{this.props.Text}</Text>
        </TouchableOpacity>   
     
    )
  }
}

const s = StyleSheet.create({
    main:{
        flex : 1,
        justifyContent : 'center',
        alignItems:'center',
        borderColor: '#d6d7da',
        borderWidth: 0.5,
        
    },
    font:{
      fontSize : 50
    }
})
