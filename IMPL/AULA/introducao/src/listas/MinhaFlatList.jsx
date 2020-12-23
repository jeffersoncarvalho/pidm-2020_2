import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


export default class MinhaFlatList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dados: [
                { nome: 'Devin' },
                { nome: 'Jackson' },
                { nome: 'James' },
                { nome: 'Joel' },
                { nome: 'John' },
                { nome: 'Jillian' },
                { nome: 'Jimmy' },
                { nome: 'Julie' },
            ]
        }


    }

    render() {
        console.log(this.state.dados)
        return (
            <View style={estilos.container}>
                <FlatList
                    data={
                        this.state.dados
                    }
                    renderItem={
                        ({ item }) => {
                            return (
                                <Text style={estilos.item}>
                                    Nome : {item.nome}
                                </Text>
                            )
                        }
                    }

                    keyExtractor={
                        (item,index)=>{
                            return item.nome + index
                        }}
                />
            </View>
        )
    }
}



const estilos = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
