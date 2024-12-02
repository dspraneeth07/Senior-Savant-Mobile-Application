import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { RootStackScreenProps } from '../../navigators/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo02 from '../components/untitled folder 2/Logo02';
import { REGISTER_SCREEN } from '../utils/constants';
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import Google from '../components/untitled folder 2/GoogleTSX';
import Facebook from '../components/untitled folder 2/FacebookTSX';

const RegisterScreen = ({ navigation }: RootStackScreenProps<"RegisterScreen">) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const validatePhoneNumber = (phone: string) => {
    const re = /^[0-9]{10}$/; // Adjust for phone number format if needed
    return re.test(phone);
  };

  const handleRegister = () => {
    if (!fullName) {
      setError('Full name is required');
      return;
    }
    if (!phoneNumber) {
      setError('Phone number is required');
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Invalid phone number');
      return;
    }

    // Mock registration logic
    const isRegistrationSuccessful = true; // Replace with actual phone number verification logic
    if (isRegistrationSuccessful) {
      setError('');
      navigation.navigate("LoginScreen");
    } else {
      setError('Registration failed. Please try again.');
    }
  };

  const onTermsofUsePressed = () => {
    console.warn('Terms of Use Pressed');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('Privacy Policy Pressed');
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
        <Text style={{ fontSize: 32, textAlign: 'center', fontWeight: '800' }}>{REGISTER_SCREEN.title}</Text>
        <Text style={{ textAlign: 'center', fontWeight: '400', marginTop: 10 }}>{REGISTER_SCREEN.description}</Text>
      </View>

      <View style={{ alignSelf: 'center', marginTop: 20, width: '90%' }}>
        <TextInput
          placeholder='Full Name'
          style={[
            styles.textInput,
            { borderColor: error && !fullName ? 'red' : '#ddd' }
          ]}
          value={fullName}
          onChangeText={setFullName}
        />
        <Icons name='account' size={24} style={styles.iconStyle} />
      </View>

      <View style={{ alignSelf: 'center', marginTop: 20, width: '90%' }}>
        <TextInput
          placeholder='Phone Number'
          keyboardType='phone-pad'
          style={[
            styles.textInput,
            { borderColor: error && (!phoneNumber || !validatePhoneNumber(phoneNumber)) ? 'red' : '#ddd' }
          ]}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Icons name='phone' size={24} style={styles.iconStyle} />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={{ alignSelf: 'center', marginTop: 10, marginHorizontal: 20 }}>
        <Text style={{ color: '#000', marginVertical: 10 }}>
          By registering, you confirm that you accept our{' '}
          <Text style={{ color: '#2196F3' }} onPress={onTermsofUsePressed}>Terms of Use</Text> and{' '}
          <Text style={{ color: '#2196F3' }} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
        </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <Text>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={{ color: '#2E2E33', fontWeight: '700' }}> Login!</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ textAlign: 'center', color: "#000", marginTop: 10, fontSize: 15 }}>Or</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
          <Google height={30} width={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
          <Facebook height={30} width={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
  iconStyle: {
    position: 'absolute',
    left: 12,
    top: 12,
    opacity: 0.5,
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
  },
  socialButton: {
    borderColor: '#ddd',
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 10,
  }
});
