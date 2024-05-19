import React from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'
import { RootStackScreenProps } from '../../navigators/RootNavigator'

const WebviewScreen = ({ route }: RootStackScreenProps<"WebviewScreen">) => {
  const { url } = route.params

  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} />
    </View>
  )
}

export default WebviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
