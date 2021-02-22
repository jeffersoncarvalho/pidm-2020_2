import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'

import MyButton from '../MyButton'
import Card from '../card/Card'
import CardItem from '../card/CardItem'

export default class ModalScreen extends Component {

    constructor(props){
        super(props)
        this.state = {tracks:[], loading: true}
    }

    componentDidMount(){
        //console.log('--->')
        //console.log(this.props.route.params.albumTracks)
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/'+this.props.route.params.albumTracks)
        .then(
            (response)=>{
                return response.json()
            }
        )
        .then(
            (responseJson)=>{
                this.setState(
                    {tracks:responseJson.tracks,
                     loading:false}
                )
            }
        )
    }

    renderTracks(){

        if(this.state.loading === true){
            return (
                <View style={{flex:1,alignItems:'center'}}>
                    <ActivityIndicator size='large' color='#0000FF'/>
                    <Text>Loading...</Text>
                </View>
            )
        }

        return (
            <FlatList
                data = {this.state.tracks}
                renderItem = {
                    ({item,index})=>{
                        return(
                            <View>
                                <Text style={{fontSize:16.5}}>
                                {(index+1<10) ? '0'+(index+1) : index+1 } - {item.title} - {item.duration}
                                </Text>
                            </View>
                        )
                    }
                }
                keyExtractor = {
                    (index,item)=>{
                        return index+item
                    }
                }

            />
        )
    }
    
    render() {
        return (
            <Card>
                <CardItem style={{flexDirection:'column',
                                  justifyContent:'center',
                                  alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>
                        {'.::'+this.props.route.params.albumName+'::.'}
                    </Text>
                    <Text>
                        {this.props.route.params.albumArtist}
                    </Text>    
                </CardItem>
                <CardItem>
                   {this.renderTracks()}
                </CardItem>
                <CardItem>
                    <MyButton
                        onPress={() => this.props.navigation.goBack()}
                    >
                        Voltar
                    </MyButton>
                </CardItem>
            </Card>
        )
    }
}