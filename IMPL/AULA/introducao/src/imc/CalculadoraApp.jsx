import React, {Component} from 'react'
import {View,TextInput} from 'react-native'

import Calculadora from './Calculadora'

export default class CalculadoraApp extends Component {

    constructor(props){
        super(props)
        this.state = {peso:null,altura:null}
    }

    render(){
        return(
            <View>
                <h2>Peso: {this.state.peso}</h2>
                <h2>Altura: {this.state.altura}</h2>
                <TextInput
                    style={{height:40}}
                    placeholder='Digite a peso'
                    onChangeText={(peso)=>this.setState({peso})}
                />
                <TextInput
                    style={{height:40}}
                    placeholder='Digite a altura'
                    onChangeText={
                        (altura)=>{
                            this.setState({altura})
                        }
                    }
                />
                <Calculadora
                    peso={this.state.peso}
                    altura={this.state.altura}
                />
            </View>
        )
    }
}