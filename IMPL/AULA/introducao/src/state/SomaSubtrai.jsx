import React, { Component } from 'react'
import { View, Button } from 'react-native'

export default class SomaSubtrai extends Component {

    constructor(props){
        super(props)

        this.state = {valor:10}
        this.subtracao = this.subtracao.bind(this)
    }

    subtracao(){
        //alert('APERTEI SUBTRAÇÃO') 
        this.setState( { valor : this.state.valor - 1 } )
    }

    render(){
        return(
            <View>
                <h1>Valor: {this.state.valor}</h1>
                <Button 
                    title='SOMA'
                    onPress={
                        ()=>{
                            //alert('APERTEI SOMA') 
                            this.setState( { valor : this.state.valor + 1 } ) 
                        }
                    }
                />
                <br />
                <Button 
                    title='SUBTRAÇÃO'
                    onPress={this.subtracao}
                />
            </View>
        )
    }
}