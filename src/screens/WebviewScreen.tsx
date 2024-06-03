import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import { RootStackScreenProps } from '../../navigators/RootNavigator'

const WebviewScreen = ({ route }: RootStackScreenProps<"WebviewScreen">) => {
  const { url } = route.params

  console.log('Loading URL:', url);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
        startInLoadingState={true}
        renderError={(errorDomain, errorCode, errorDesc) => (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Failed to load page</Text>
          </View>
        )}
      />
    </View>
  )
}

export default WebviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
})