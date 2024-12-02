import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // For gradient backgrounds
import { RootStackScreenProps } from '../../navigators/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import { PROFILE_SCREEN } from '../utils/constants';

const ProfileScreen = ({ navigation }: RootStackScreenProps<'ProfileScreen'>) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleSave = () => {
    setShowPreview(true);
  };

  return (
    <LinearGradient colors={['#74ebd5', '#ACB6E5']} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.title}>{PROFILE_SCREEN.title}</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Name"
              placeholderTextColor="#aaa"
              style={styles.textInput}
              value={name}
              onChangeText={setName}
            />
            <Icons name="account" size={24} style={styles.inputIcon} />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#aaa"
              style={styles.textInput}
              value={email}
              onChangeText={setEmail}
            />
            <Icons name="email" size={24} style={styles.inputIcon} />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Phone Number"
              keyboardType="phone-pad"
              placeholderTextColor="#aaa"
              style={styles.textInput}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <Icons name="phone" size={24} style={styles.inputIcon} />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Address"
              placeholderTextColor="#aaa"
              style={styles.textInput}
              value={address}
              onChangeText={setAddress}
            />
            <Icons name="home" size={24} style={styles.inputIcon} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>

        {showPreview && (
          <View style={styles.previewContainer}>
            <Text style={styles.previewTitle}>Profile Preview</Text>
            <Text style={styles.previewText}>Name: {name}</Text>
            <Text style={styles.previewText}>Email: {email}</Text>
            <Text style={styles.previewText}>Phone Number: {phoneNumber}</Text>
            <Text style={styles.previewText}>Address: {address}</Text>
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 15,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 30,
  },
  formContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    alignSelf: 'center',
    marginTop: 20,
    width: '90%',
  },
  textInput: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 48,
    paddingRight: 10,
    height: 50,
    borderRadius: 25,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  inputIcon: {
    position: 'absolute',
    left: 16,
    top: 13,
    opacity: 0.5,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  saveButton: {
    backgroundColor: '#74ebd5',
    paddingHorizontal: 40,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  previewContainer: {
    marginTop: 30,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
  },
  previewTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  previewText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
    color: '#555',
  },
});
