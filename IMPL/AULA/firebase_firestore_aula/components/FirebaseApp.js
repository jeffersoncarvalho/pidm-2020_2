import React, {Component} from 'react'
import {View,Text} from 'react-native'

import firestore from '@react-native-firebase/firestore' 

export default class FirebaseApp extends Component{

  constructor(props){
      super(props)
      this.getUser()
      this.state = {name:''}
  }

  getUser = async () => {
      const userDocument = await firestore().collection('products')
      .doc('72gx4YpdoVP7qcpNvRPb').get()
      //console.log(userDocument._data.name)
      this.setState({name:userDocument._data.price})
  }

  render(){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25}}>
          {this.state.name}
        </Text>
      </View>
    )
  }
}