import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class Atividade02 extends Component {

    constructor(props){
        super(props)
        this.state = {fort:0,nata:0,rjan:0,spau:0}

        this.votarFortaleza = this.votarFortaleza.bind(this)
        this.votarNatal = this.votarNatal.bind(this)
        this.votarRioDeJaneiro = this.votarRioDeJaneiro.bind(this)
        this.votarSaoPaulo = this.votarSaoPaulo.bind(this)

        this.menores = this.menosVotadas(this.state)
    }

    menosVotadas(cidades){
        
        let menor = cidades.fort
        let menores = ''
        
        for(var prop in cidades){
            if(cidades[prop] <= menor)
                menor = cidades[prop]
        }

        for(var prop in this.state){
            if(cidades[prop] === menor)
                menores += ' ' + prop 
        }
        
        return menores
    }

    votarFortaleza(){
        this.setState(
            {fort:this.state.fort+1},
            ()=>{
                this.menores = this.menosVotadas(this.state)
                this.setState(this.state)
            })
    }
    votarNatal(){
        this.setState(
            {nata:this.state.nata+1},
            ()=>{
                this.menores = this.menosVotadas(this.state)
                this.setState(this.state)
            }
            )
        
    }
    votarRioDeJaneiro(){
        this.setState(
            {rjan:this.state.rjan+1},
            ()=>{
                this.menores = this.menosVotadas(this.state)
                this.setState(this.state)
            })
        
    }
    votarSaoPaulo(){
        this.setState(
            {spau:this.state.spau+1},
            ()=>{
                this.menores = this.menosVotadas(this.state)
                this.setState(this.state)
            }
            )
    }

    render(){
        const {fort,nata,rjan,spau} = this.state
        
        return (
            <View>
                <Text>Fortaleza: {fort}</Text>
                <Text>Natal: {nata}</Text>
                <Text>Rio de Janeiro: {rjan}</Text>
                <Text>São Paulo: {spau}</Text>

                <View style={{margin:5}}>
                    <Button title='Fortaleza' onPress={this.votarFortaleza}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Natal' onPress={this.votarNatal}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Rio de Janeiro' onPress={this.votarRioDeJaneiro}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='São Paulo' onPress={this.votarSaoPaulo}/>
                </View>
                
                <Text>Mais Votada(s): </Text>
                <Text>Menos Votada(s): {this.menores}</Text>
            </View>
        )
    }
}