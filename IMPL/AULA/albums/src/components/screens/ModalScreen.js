import React, { Component } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator} from 'react-native';

import Card from '../cards/Card'
import CardItem from '../cards/CardItem'
import MyButton from '../MyButton'
import Header from '../Header'



export default class ModalScreen extends Component {

    constructor(props){
        super(props)
        this.state = {tracks:[],loading:true}
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/'+this.props.route.params.tracks)
        .then(
            (response) => {
                return response.json()
            } 
        )
        .then(
            (responseJson) => {
                this.setState({tracks:responseJson.tracks, loading:false})
                //console.log(this.state.tracks)
            }
        )

        
    }

    renderMusic(){
        if(this.state.loading===true){
            return (
                <View style={{flex:1, alignItems:'center'}}>     
                    <ActivityIndicator size="large" color="#0000ff"/>
                    <Text>loading...</Text>
                </View>
            )
        } else
        return (
            <FlatList
                data = {this.state.tracks}
                renderItem = {
                    ({item,index})=>{
                        return (
                           <View>
                               <Text>{(index<10)?'0'+index:index} - ({item.duration}) - {item.title}</Text>
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
                <CardItem style={{flexDirection:'column', alignItems: 'center'}}>
                    <Text style={{fontSize:18, fontWeight: 'bold'}}>
                        {'.:: '+this.props.route.params.name+' ::.'}
                    </Text>
                    <Text>
                        Lista das Músicas
                    </Text>
                </CardItem>
                <CardItem>
                    {this.renderMusic()}
                </CardItem>
                <CardItem>
                <MyButton 
                        title='Voltar'
                        onPress={
                            () => this.props.navigation.goBack()
                        }
                        />
                </CardItem>
            </Card>
        );
    }
}