import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../../navigators/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile01 = ({ navigation }: RootStackScreenProps<"Profile01">) => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text> Profile Screen </Text>
        </View>
    </SafeAreaView>
  )
}

export default Profile01

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ABD6E2',
    },
})