import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class Atividade02 extends Component {

    constructor(props){
        super(props)
        this.state = {Fortaleza:0, Quixada: 0, Limoeiro: 0, Juazeiro: 0}

        this.votarFortaleza = this.votarFortaleza.bind(this)
        this.votarQuixada = this.votarQuixada.bind(this)
        this.votarLimoeiro = this.votarLimoeiro.bind(this)
        this.votarJuazeiro = this.votarJuazeiro.bind(this)

        this.menosVotadas = this.cidadesMenosVotadas(this.state)
    }

    cidadesMenosVotadas(cidades){

        let menosVotadas = ''
        let menor = cidades.Fortaleza

        //descobrindo o menor valor das votações
        for(var cidade in cidades){
            if(cidades[cidade] <= menor)
                menor = cidades[cidade]
        }

        //montar a string
        for(var cidade in cidades){
            if(cidades[cidade] === menor)
                menosVotadas += ' ' + cidade
        }

        return menosVotadas

    }

    votarFortaleza(){
    
        this.setState(
            {Fortaleza:this.state.Fortaleza+1}
            ,
            ()=>{
                 this.menosVotadas = this.cidadesMenosVotadas(this.state)
                 this.setState(this.state)
            }
        )
        

    }
    votarQuixada(){
        this.setState(
            {Quixada:this.state.Quixada+1}
            ,
            ()=>{
                 this.menosVotadas = this.cidadesMenosVotadas(this.state)
                 this.setState(this.state)
            })
    }
    votarLimoeiro(){
        this.setState(
            {Limoeiro:this.state.Limoeiro+1} 
            ,
            ()=>{
                 this.menosVotadas = this.cidadesMenosVotadas(this.state)
                 this.setState(this.state)
            })
    }
    votarJuazeiro(){
        this.setState(
            {Juazeiro:this.state.Juazeiro+1}
            ,
            ()=>{
                 this.menosVotadas = this.cidadesMenosVotadas(this.state)
                 this.setState(this.state)
            })
    }

    render() {
        //console.log('ATIVOU O RENDER')
        const {Fortaleza,Quixada,Limoeiro,Juazeiro} = this.state

        return (
            <View style={estilos.container}>
                
                <View style={estilos.titulo}>
                    <h2>VOTAÇÃO DE CIDADES</h2>
                </View>

                <View style={estilos.cidades}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Fortaleza: {Fortaleza} voto(s)</Text>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Quixadá: {Quixada} voto(s)</Text>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Limoeiro do Norte: {Limoeiro} voto(s)</Text>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Juazeiro: {Juazeiro} voto(s)</Text>
                </View>
                
                <View style={estilos.maismenos}>
                    <Text>Mais Votadas: </Text>
                    <Text>Menos Votadas: {this.menosVotadas} </Text>
                </View>
                
                <View style={estilos.botoes}>
                    <Button title='Fortaleza' onPress={(this.votarFortaleza)}/>
                    <Button title='Quixadá' onPress={(this.votarQuixada)}/>
                    <Button title='Limoeiro' onPress={(this.votarLimoeiro)}/>
                    <Button title='Juazeiro' onPress={(this.votarJuazeiro)}/>
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    titulo: {
        fontFamily:'Arial',
        alignSelf: 'center'
    },
    cidades: {
        margin: 20
    },
    maismenos: {
        margin: 20
    },
    botoes: { 
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20
    }
});