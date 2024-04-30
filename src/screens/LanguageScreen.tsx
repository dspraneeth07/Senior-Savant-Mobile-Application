import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackScreenProps } from '../../navigators/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo02 from '../components/untitled folder 2/Logo02';
import Icons from "@expo/vector-icons/MaterialCommunityIcons"
import { LANGUAGE_SCREEN } from '../utils/constants';

const LanguageScreen = ({ navigation }: RootStackScreenProps<"LanguageScreen">) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Function to handle language selection
  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
  };

  const indianLanguages = [
    { name: 'English', script: 'latin' }, //English
    { name: 'हिन्दी', script: 'devanagari' }, // Hindi
    { name: 'తెలుగు', script: 'telugu' }, // Telugu
    { name: 'தமிழ்', script: 'tamil' }, // Tamil
    { name: 'ಕನ್ನಡ', script: 'kannada' }, // Kannada
    { name: 'മലയാളം', script: 'malayalam' }, // Malayalam
    { name: 'বাংলা', script: 'bengali' }, // Bengali
    { name: 'मराठी', script: 'devanagari' }, // Marathi
    { name: 'ગુજરાતી', script: 'gujarati' }, // Gujarati
    { name: 'ଓଡ଼ିଆ', script: 'odia' }, // Odia
    { name: 'ਪੰਜਾਬੀ', script: 'gurmukhi' }, // Punjabi
    { name: 'অসমীয়া', script: 'bengali' }, // Assamese
    { name: 'اردو', script: 'arabic' } // Urdu
  ];

  // array into groups of 3 for grid layout
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Arrange languages into a 3x3 grid
  const languagesGrid = chunkArray(indianLanguages, 3);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 15, marginLeft: 15}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name='chevron-left' size={30}/>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Logo02 height={90} width={250} />
      </View>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 32, fontWeight: '800', textAlign: 'center' }}>{LANGUAGE_SCREEN.title}</Text>
        <Text style={{ textAlign: 'center', fontWeight: '400', marginTop: 10 }}>{LANGUAGE_SCREEN.description}</Text>

        {/* Display languages in a 3x3 grid */}
        <View style={styles.gridContainer}>
          {languagesGrid.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.gridRow}>
              {row.map((language, colIndex) => (
                <TouchableOpacity
                  key={colIndex}
                  style={[
                    styles.languageButton, 
                    selectedLanguage === language.name && styles.selectedLanguage,
                    language.name === 'தமிழ்' && { marginLeft: 50 } // Adjust Tamil button's position
                  ]}
                  onPress={() => handleLanguageSelection(language.name)}>
                  <Text style={[styles.languageText, { fontFamily: language.script === 'devanagari' || language.script === 'bengali' || language.script === 'tamil' ? 'Lohit-Devanagari' : 'Roboto' }]}>
                    {language.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* Next button */}
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <TouchableOpacity
            style={[styles.nextButton, { backgroundColor: selectedLanguage ? '#FFC107' : '#ccc' }]}
            onPress={() => navigation.navigate("LoginScreen")}
            disabled={!selectedLanguage}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABD6E2',
  },
  gridContainer: {
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 32,
    height: 52,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  selectedLanguage: {
    backgroundColor: '#fff',
    borderColor: '#FFC107',
  },
  languageText: {
    fontSize: 16,
    fontWeight: '600',
  },
  nextButton: {
    paddingHorizontal: 32,
    height: 52,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
