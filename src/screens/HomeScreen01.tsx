  import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
  import React, { useState } from 'react';
  import { RootStackScreenProps } from '../../navigators/RootNavigator';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import Icons from "@expo/vector-icons/MaterialCommunityIcons";
  import { HOME_SCREEN_01 } from '../utils/constants';

  const HomeScreen01 = ({ navigation }: RootStackScreenProps<"HomeScreen01">) => {
    const [showMessageModal, setShowMessageModal] = useState(false);

    const showMessage = () => {
      setShowMessageModal(true);
    };

    const closeModal = () => {
      setShowMessageModal(false);
    };

    const signUpModal = () => {
      navigation.navigate("RegisterScreen");
    };

    const handleSignOut = () => {
      // Implement sign-out logic here (e.g., clear user session, navigate to sign-in screen)
      navigation.navigate("LoginScreen");
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 15, marginLeft: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Icons name='chevron-left' size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 35, textAlign: 'center', fontWeight: '800', marginTop: 30 }}>{HOME_SCREEN_01.title}</Text>
      </View>
      <View style={{ marginTop: 70 }}>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
        <TouchableOpacity style={styles.actionButton} onPress={() => {navigation.navigate("ServicesScreen01")}}>
            <Text style={styles.actionButtonText}>Services <Icons name='room-service' size={18} /></Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <TouchableOpacity style={styles.actionButton} onPress={() => {navigation.navigate("NewsList01")}}>
            <Text style={styles.actionButtonText}>Government News <Icons name='newspaper' size={18} /></Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <TouchableOpacity style={styles.actionButton} onPress={() => { navigation.navigate("YoutubeOverlay01") }}>
            <Text style={styles.actionButtonText}>Tutorials <Icons name='nature-people' size={18} /></Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#808080" }]} onPress={showMessage}>
            <Text style={styles.actionButtonText}>Reminders <Icons name='reminder' size={18} /></Text>
          </TouchableOpacity>
        </View>
      </View>

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
    );
  };

  export default HomeScreen01;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ABD6E2',
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
  });
