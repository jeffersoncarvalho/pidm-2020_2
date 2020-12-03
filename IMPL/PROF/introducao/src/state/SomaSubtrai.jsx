import React, {Component} from 'react'
import {View,Button} from 'react-native'

export default class SomaSubtrai extends Component {

    constructor(props) {
        super(props)
        this.state = {valor:0}
    }

    subtrai(){
        alert('APERTEI SUBTRAI')
    }
 
    render(){

        return(
            <View>
                <h1>Valor: {this.state.valor} </h1>
                <Button title='SOMA' onPress={
                    ()=>
                        {
                            alert('APERTEI SOMA')
                        }
                    }/>
                <br /> 
                <Button title='SUBTRAI' onPress={this.subtrai}/>
            </View>
        )
    }
}