import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../../navigators/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo02 from '../components/untitled folder 2/Logo02'
import { REGISTER_SCREEN } from '../utils/constants'
import Icons from "@expo/vector-icons/MaterialCommunityIcons"
import Google from '../components/untitled folder 2/GoogleTSX'
import Facebook from '../components/untitled folder 2/FacebookTSX'

const LoginScreen = ({ navigation } : RootStackScreenProps<"RegisterScreen"> ) => {
    {/* Terms of Use */}
    const onTermsofUsePressed = () => {
        console.warn('onTermsofUsePressed');
        /* navigation.navigate() */ 
    }
    {/* Privacy Policy */}
    const onPrivacyPolicyPressed = () => {
        console.warn('onPrivacyPolicyPressed');
        /* navigation.navigate() */ 
    }
    return (
    <SafeAreaView style = {styles.container}>
        <View style={{marginTop: 15, marginLeft: 15}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icons name='chevron-left' size={30}/>
            </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
            <Logo02 height={90} width={400} />
        </View>
        <View>
            <Text style={{ fontSize: 32, textAlign: 'center', fontWeight: '800'}}>{REGISTER_SCREEN.title}</Text>
            <Text style={{textAlign: 'center', fontWeight: '400', marginTop: 10}}>{REGISTER_SCREEN.description}</Text>
        </View>
        <>
            <View style={{alignSelf: 'center', marginTop: 20, width: '90%'}}>    
                <TextInput placeholder=' Full Name' style={[{fontSize: 16, fontWeight: '500', paddingLeft:  48, paddingRight: 10, height: 48, borderRadius: 12,     width:   "100%", borderWidth: 2}]}/>
                {/* Name Icon */}                                               
                <Icons name='account' size={24} style={{position: 'absolute', left: 12, top: 12, opacity: 0.5}}/>
            </View>
        </>
        <>
            <View style={{alignSelf: 'center', marginTop: 20, width: '90%'}}>    
                <TextInput placeholder=' Phone Number ' keyboardType='phone-pad' style={[{fontSize: 16, fontWeight: '500', paddingLeft:  48, paddingRight: 10, height: 48, borderRadius: 12,     width:   "100%", borderWidth: 2}]}/>
                {/* Phone Icon */}                                               
                <Icons name='phone' size={24} style={{position: 'absolute', left: 12, top: 12, opacity: 0.5}}/>
            </View>
        </>
        <>
            <View style={{alignSelf: 'center', marginTop: 20, width: '90%'}}>    
                <TextInput placeholder=' Enter Password ' secureTextEntry={true} style={[{fontSize: 16, fontWeight: '500', paddingLeft:  48, paddingRight: 10, height: 48, borderRadius: 12,     width:   "100%", borderWidth: 2}]}/>
                {/* Lock Icon */}                                               
                <Icons name='lock' size={24} style={{position: 'absolute', left: 12, top: 12, opacity: 0.5}}/>
            </View>
        </>
        <>
            <View style={{alignSelf: 'center', marginTop: 20, width: '90%'}}>    
                <TextInput placeholder=' Confirm Password' secureTextEntry={true} style={[{fontSize: 16, fontWeight: '500', paddingLeft:  48, paddingRight: 10, height: 48, borderRadius: 12,     width:   "100%", borderWidth: 2}]}/>
                {/* Lock Icon */}                                               
                <Icons name='lock' size={24} style={{position: 'absolute', left: 12, top: 12, opacity: 0.5}}/>
            </View>
        </>
        <View style={{alignSelf: 'center', marginTop: 10, marginHorizontal: 20}}>
          {/* Terms and Policy */}
            <Text style={{color: '#000', marginVertical: 10}}>By registering, you confirm that you accept our <Text style={{color: '#2196F3'}} onPress={onTermsofUsePressed}>Terms of Use</Text> and <Text style={{color: '#2196F3'}} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text> 
        </View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TouchableOpacity style={{backgroundColor: "#FFC107", paddingHorizontal: 32, height: 52, borderRadius: 100, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
            <Text>Have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                <Text style = {{color: '#2E2E33', fontWeight: '700'}}> Login!</Text>
            </TouchableOpacity> 
        </View> 

        <Text style = {{textAlign: 'center', color: "#000", marginTop: 10, fontSize: 15 }}>Or</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <TouchableOpacity onPress={() => {}} style={{ borderColor: '#ddd', borderRadius: 10, borderWidth: 2, paddingHorizontal: 30, paddingVertical: 10, marginRight: 10 }}>
                <Google height={30} width={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={{ borderColor: '#ddd', borderRadius: 10, borderWidth: 2, paddingHorizontal: 30, paddingVertical: 10 }}>
                <Facebook height={30} width={30} />
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
    },
})