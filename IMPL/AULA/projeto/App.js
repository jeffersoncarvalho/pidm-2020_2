import React from 'react'
import { View } from 'react-native'

import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

export default () => {
  return (
    <View style={{flex:1}}>
      <Header title='Albums App' />
      <AlbumList />
    </View>
  )
}