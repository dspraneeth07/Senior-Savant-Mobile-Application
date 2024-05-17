import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackScreenProps } from '../../navigators/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { PROFILE_SCREEN } from '../utils/constants';

const ProfileScreen = ({ navigation }: RootStackScreenProps<"ProfileScreen">) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleSave = () => {
    setShowPreview(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Icons name='chevron-left' size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>{PROFILE_SCREEN.title}</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder='Name'
            style={styles.textInput}
            value={name}
            onChangeText={setName}
          />
          <Icons name='account' size={24} style={styles.inputIcon} />
        </View>
        
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder='Email'
            keyboardType='email-address'
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
          />
          <Icons name='email' size={24} style={styles.inputIcon} />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder='Phone Number'
            keyboardType='phone-pad'
            style={styles.textInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Icons name='phone' size={24} style={styles.inputIcon} />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder='Address'
            style={styles.textInput}
            value={address}
            onChangeText={setAddress}
          />
          <Icons name='home' size={24} style={styles.inputIcon} />
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
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABD6E2',
  },
  header: {
    marginTop: 15,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '800',
    marginTop: 30,
  },
  formContainer: {
    marginTop: 30,
    paddingHorizontal: 15,
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
    height: 48,
    borderRadius: 12,
    width: "100%",
    borderWidth: 2,
    borderColor: '#ddd',
  },
  inputIcon: {
    position: 'absolute',
    left: 12,
    top: 12,
    opacity: 0.5,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  saveButton: {
    backgroundColor: '#FFC107',
    paddingHorizontal: 32,
    height: 52,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  previewContainer: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
  previewTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  previewText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 5,
  },
});
