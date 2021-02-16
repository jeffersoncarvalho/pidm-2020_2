import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

//import HomeScreen from './src/components/screens/HomeScreen'
import Routes from './src/components/screens/Routes'

export default () => {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  )
}