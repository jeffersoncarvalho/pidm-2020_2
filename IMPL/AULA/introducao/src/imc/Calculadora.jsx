import React, {Component} from 'react'
import {Text} from 'react-native'

export default class Calculadora extends Component{
    render(){

        const {peso,altura} = this.props

        if(!peso || !altura) return null

        //const imc = this.props.peso/(this.props.altura*this.props.altura)
        const imc = peso/(altura**2)
        return(
            <Text style={ {padding:10,fontSize:20} }>
                IMC: {imc}
            </Text>
        )
    }
}