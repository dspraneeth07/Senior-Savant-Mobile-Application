import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from '../../navigators/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { HOME_SCREEN } from '../utils/constants';

const HomeScreen = ({ navigation }: RootStackScreenProps<"HomeScreen">) => {
  const handleSignOut = () => {
    // Implement sign-out logic here (e.g., clear user session, navigate to sign-in screen)
    navigation.navigate("LoginScreen");
  };

  const handleProfile = () => {
    navigation.navigate("ProfileScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleProfile} style={styles.profileButton}>
          <Icons name="account" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>{HOME_SCREEN.title}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.actionButton} onPress={() => {navigation.navigate("ServicesScreen")}}>
            <Text style={styles.actionButtonText}>Services <Icons name='room-service' size={18} /></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.actionButton} onPress={() => { }}>
            <Text style={styles.actionButtonText}>Government News <Icons name='newspaper' size={18} /></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.actionButton} onPress={() => { navigation.navigate("youtubeoverlay") }}>
            <Text style={styles.actionButtonText}>Tutorials <Icons name='nature-people' size={18} /></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.actionButton} onPress={() => { }}>
            <Text style={styles.actionButtonText}>Reminders <Icons name='reminder' size={18} /></Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABD6E2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 15,
  },
  profileButton: {
    backgroundColor: '#ABD6E2',
    padding: 10,
    borderRadius: 5,
  },
  signOutButton: {
    backgroundColor: '#FF5252',
    padding: 10,
    borderRadius: 5,
  },
  signOutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '800',
    marginTop: 30,
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
    height: 52,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});