import React, { Component } from 'react'
import { Image } from 'react-native'

export default class Imagem extends Component{
    render(){
        let img =  {uri :'https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-240x320.png'} //objeto JSON
        return(
            //PROPS = PROPERTIES
            <Image
                source={img}
                style={ {width:240,height:320} }
            />
        )
    }
}