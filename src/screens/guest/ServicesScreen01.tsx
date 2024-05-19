import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { RootStackScreenProps } from '../../../navigators/RootNavigator';
import { SERVICE_SCREEN } from '../../utils/constants';

const SERVICE_URLS = {
    'National Social Assistance Programme (NSAP)': 'https://nsap.nic.in/',
    'Employees\' Provident Fund Organisation (EPFO)': 'https://www.epfindia.gov.in/',
    'Jeevan Pramaan - Digital Life Certificate for Pensioners': 'https://jeevanpramaan.gov.in/',
    'Indira Gandhi National Old Age Pension Scheme (IGNOAPS)': 'https://nsap.nic.in/',
    'Pradhan Mantri Vaya Vandana Yojana (PMVVY)': 'https://www.licindia.in/Products/Pension-Plans/Pradhan-Mantri-Vaya-Vandana-Yojana',
    'National Informatics Centre (NIC) - Pensioners\' Services': 'https://www.pensionersportal.gov.in/',
    'Ministry of Rural Development - Pension Schemes': 'https://rural.nic.in/schemes/pension-schemes',
}

const accessibleServices = [
    'National Social Assistance Programme (NSAP)',
    'Employees\' Provident Fund Organisation (EPFO)',
    'Jeevan Pramaan - Digital Life Certificate for Pensioners',
];

const ServicesScreen01 = ({ navigation }: RootStackScreenProps<"ServicesScreen01">) => {
  const [showMessageModal, setShowMessageModal] = useState(false);

  const handlePress = (url: string) => {
    navigation.navigate('WebViewScreen01', { url });
  }

  const showMessage = () => {
    setShowMessageModal(true);
  }

  const closeModal = () => {
    setShowMessageModal(false);
  }

  const signUpModal = () => {
    navigation.navigate("RegisterScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Icons name='chevron-left' size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 32, textAlign: 'center', fontWeight: '800' }}>{SERVICE_SCREEN.title}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {Object.keys(SERVICE_URLS).map((key) => (
          <View key={key} style={styles.buttonWrapper}>
            {accessibleServices.includes(key) ? (
              <TouchableOpacity style={styles.actionButton} onPress={() => handlePress(SERVICE_URLS[key])}>
                <Text style={styles.actionButtonText}>{key}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#808080" }]} onPress={showMessage}>
                <Text style={styles.actionButtonText}>{key}</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Message Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showMessageModal}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Some features are not able to access as you have not created an account. Create an account to get access to all features.</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={signUpModal} style={[styles.closeButton, styles.createAccountButton]}>
                <Text style={styles.closeButtonText}>Create account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default ServicesScreen01

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABD6E2',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '800',
    marginTop: 30,
  },
  header: {
    marginTop: 15,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollViewContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 70,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 40,
  },
  actionButton: {
    backgroundColor: "#FFC107",
    paddingHorizontal: 32,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FFC107',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  createAccountButton: {
    backgroundColor: '#2196F3',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
