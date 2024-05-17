import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { RootStackScreenProps } from '../../navigators/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import Logo02 from '../components/untitled folder 2/Logo02';
import { LOGIN_SCREEN } from '../utils/constants';
import { useAuth } from '../../context/AuthContext'; // Assuming AuthContext is in this path

const LoginScreen = ({ navigation }: RootStackScreenProps<"LoginScreen">) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); // Using Auth context for managing login state

  const handleLogin = () => {
    if (!phoneNumber) {
      setError('Phone number is required');
      return;
    }
    if (!otp) {
      setError('OTP is required');
      return;
    }
    // Mock login, replace with actual logic
    const isLoginSuccessful = true; // Replace with actual login logic
    if (isLoginSuccessful) {
      setError('');
      login(); // Set the user as logged in
      navigation.navigate("HomeScreen");
    } else {
      setError('Login failed. Please try again.');
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
          placeholder='Phone Number'
          keyboardType='phone-pad'
          style={[
            styles.textInput,
            { borderColor: error && !phoneNumber ? 'red' : '#ddd' }
          ]}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Icons name='phone' size={24} style={{ position: 'absolute', left: 12, top: 12, opacity: 0.5 }} />
      </View>

      <View style={{ alignSelf: 'center', marginTop: 20, width: '90%' }}>
        <TextInput
          placeholder='One-Time Password'
          keyboardType='phone-pad'
          style={[
            styles.textInput,
            { borderColor: error && !otp ? 'red' : '#ddd' }
          ]}
          value={otp}
          onChangeText={setOtp}
        />
        <Icons name='cellphone-text' size={24} style={{ position: 'absolute', left: 12, top: 12, opacity: 0.5 }} />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Text style={{ textAlign: 'center', color: "red", marginTop: 20 }}>
        Your One-Time Password (OTP) is sent to your registered mobile number
      </Text>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  }
});
