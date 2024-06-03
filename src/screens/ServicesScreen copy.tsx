import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { RootStackScreenProps } from '../../navigators/RootNavigator'
import { SERVICE_SCREEN } from '../utils/constants';

const SERVICE_URLS = {
    'National Social Assistance Programme (NSAP)': 'https://nsap.nic.in/',
    'Employees\' Provident Fund Organisation (EPFO)': 'https://www.epfindia.gov.in/',
    'Jeevan Pramaan - Digital Life Certificate for Pensioners': 'https://jeevanpramaan.gov.in/',
    'Indira Gandhi National Old Age Pension Scheme (IGNOAPS)': 'https://nsap.nic.in/',
    'Pradhan Mantri Vaya Vandana Yojana (PMVVY)': 'https://www.licindia.in/Products/Pension-Plans/Pradhan-Mantri-Vaya-Vandana-Yojana',
    'National Informatics Centre (NIC) - Pensioners\' Services': 'https://www.pensionersportal.gov.in/',
    'Ministry of Rural Development - Pension Schemes': 'https://rural.nic.in/schemes/pension-schemes',
}

const ServicesScreen = ({ navigation }: RootStackScreenProps<"ServicesScreen">) => {
  const handlePress = (url: string) => {
    navigation.navigate('WebviewScreen', { url })
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
            <TouchableOpacity style={styles.actionButton} onPress={() => handlePress(SERVICE_URLS[key])}>
              <Text style={styles.actionButtonText}>{key}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ServicesScreen

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
})