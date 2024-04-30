import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../../navigators/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from "@expo/vector-icons/MaterialCommunityIcons"
import Logo02 from '../components/untitled folder 2/Logo02'
import { LOGIN_SCREEN } from '../utils/constants'

const LoginScreen = ({ navigation } : RootStackScreenProps<"LoginScreen">) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{marginTop: 15, marginLeft: 15}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icons name='chevron-left' size={30}/>
            </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
            <Logo02 height={90} width={400} />
        </View>
        <View>
            <Text style={{ fontSize: 32, textAlign: 'center', fontWeight: '800'}}>{LOGIN_SCREEN.title}</Text>
            <Text style={{textAlign: 'center', fontWeight: '400', marginTop: 10}}>{}</Text>
        </View>

        <>
            <View style={{alignSelf: 'center', marginTop: 20, width: '90%'}}>    
                <TextInput placeholder=' Phone Number ' keyboardType='phone-pad' style={[{fontSize: 16, fontWeight: '500', paddingLeft:  48, paddingRight: 10, height: 48, borderRadius: 12,     width:   "100%", borderWidth: 2}]}/>
                {/* Phone Icon */}                                               
                <Icons name='phone' size={24} style={{position: 'absolute', left: 12, top: 12, opacity: 0.5}}/>
            </View>
        </>
        <>
            <View style={{alignSelf: 'center', marginTop: 20, width: '90%'}}>    
                <TextInput placeholder=' One-Time Password ' keyboardType='phone-pad' style={[{fontSize: 16, fontWeight: '500', paddingLeft:  48, paddingRight: 10, height: 48, borderRadius: 12,     width:   "100%", borderWidth: 2}]}/>
                {/* Phone Icon */}                                               
                <Icons name='cellphone-text' size={24} style={{position: 'absolute', left: 12, top: 12, opacity: 0.5}}/>
            </View>
        </>

        <Text style = {{textAlign: 'center', color: "red", marginTop: 20 }}>Your One-Time Password (OTP) is sent to your registered mobile number</Text>

        <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TouchableOpacity style={{backgroundColor: "#FFC107", paddingHorizontal: 32, height: 52, borderRadius: 100, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate("LoginScreen01")}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>Login</Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ABD6E2',
    }
});