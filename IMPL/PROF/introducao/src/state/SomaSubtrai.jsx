import React, {Component} from 'react'
import {View,Button} from 'react-native'

export default class SomaSubtrai extends Component {

    constructor(props) {
        super(props)
        this.state = {valor:0}

        this.subtrai = this.subtrai.bind(this)
    }

    subtrai(){
        //alert('APERTEI SUBTRAI')
        this.setState({valor:this.state.valor-1})
    }
 
    render(){

        return(
            <View>
                <h1>Valor: {this.state.valor} </h1>
                <Button title='SOMA' onPress={
                    ()=>
                        {
                            //alert('APERTEI SOMA')
                            this.setState({valor:this.state.valor+1})
                        }
                    }/>
                <br /> 
                <Button title='SUBTRAI' onPress={this.subtrai}/>
                <br /> 
                <Button title='SOMA 10' onPress={()=>this.setState({valor:this.state.valor + 10})}/>
                <br /> 
                <Button title='SUBTRAI 10' onPress={()=>this.setState({valor:this.state.valor - 10})}/>
            </View>
        )
    }
}