import React from 'react'
import { View, Text } from 'react-native'

import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

export default () => {
  return (
    <View>
      <Header title='Projeto Álbuns' />
      <AlbumList />
    </View>
  )
}