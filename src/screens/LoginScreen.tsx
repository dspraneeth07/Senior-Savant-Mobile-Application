import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { RootStackScreenProps } from '../../navigators/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import Logo02 from '../components/untitled folder 2/Logo02';
import { LOGIN_SCREEN } from '../utils/constants';
import Google from '../components/untitled folder 2/GoogleTSX';
import Facebook from '../components/untitled folder 2/FacebookTSX';

const LoginScreen = ({ navigation }: RootStackScreenProps<"LoginScreen">) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSendOTP = () => {
    if (!phoneNumber) {
      setError('Phone number is required');
      return;
    }
    // Mock sending OTP, replace with actual logic
    const isOTPSent = true; // Replace with actual OTP sending logic
    if (isOTPSent) {
      setError('');
      navigation.navigate("LoginScreen01");
    } else {
      setError('Failed to send OTP. Please try again.');
    }
  };

  const handleGuestLogin = () => {
    // Mock guest login, replace with actual logic
    const isGuestLoginSuccessful = true; // Replace with actual guest login logic
    if (isGuestLoginSuccessful) {
      setError('');
      navigation.navigate("HomeScreen01");
    } else {
      setError('Guest login failed. Please try again.');
    }
  };

  const handleSocialLogin = (platform: string) => {
    // Mock social login, replace with actual logic
    const isSocialLoginSuccessful = true; // Replace with actual social login logic
    if (isSocialLoginSuccessful) {
      setError('');
      navigation.navigate("HomeScreen01");
    } else {
      setError(`Failed to login with ${platform}. Please try again.`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 15, marginLeft: 15 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name='chevron-left' size={30} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Logo02 height={90} width={400} />
      </View>
      <View>
        <Text style={{ fontSize: 32, textAlign: 'center', fontWeight: '800' }}>{LOGIN_SCREEN.title}</Text>
      </View>

      <View style={{ alignSelf: 'center', marginTop: 20, width: '90%' }}>
        <TextInput
          placeholder=' Phone Number '
          keyboardType='phone-pad'
          style={[
            styles.textInput,
            { borderColor: error ? 'red' : '#ddd' }
          ]}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Icons name='phone' size={24} style={{ position: 'absolute', left: 12, top: 12, opacity: 0.5 }} />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity style={styles.button} onPress={handleGuestLogin}>
          <Text style={styles.buttonText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ textAlign: 'center', color: "#000", marginTop: 20, fontSize: 15 }}>Or</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={() => handleSocialLogin('Google')} style={styles.socialButton}>
          <Google height={30} width={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialLogin('Facebook')} style={styles.socialButton}>
          <Facebook height={30} width={30} />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 90 }}>
        <Text>Want to create an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={{ color: '#2E2E33', fontWeight: '700' }}> Sign Up!</Text>
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
  textInput: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 48,
    paddingRight: 10,
    height: 48,
    borderRadius: 12,
    width: "100%",
    borderWidth: 2,
  },
  button: {
    backgroundColor: "#FFC107",
    paddingHorizontal: 32,
    height: 52,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600'
  },
  socialButton: {
    borderColor: '#ddd',
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  }
});