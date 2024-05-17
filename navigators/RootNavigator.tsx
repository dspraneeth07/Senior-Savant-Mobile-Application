import React from 'react';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen01 from '../src/screens/IntroScreen01';
import LanguageScreen from '../src/screens/LanguageScreen';
import RegisterScreen from '../src/screens/RegisterScreen';
import LoginScreen from '../src/screens/LoginScreen';
import LoginScreen01 from '../src/screens/LoginScreen01';
import HomeScreen01 from '../src/screens/HomeScreen01';
import ProfileScreen from '../src/screens/ProfileScreen';
import youtubeoverlay from '../src/screens/youtubeoverlay';
import HomeScreen from '../src/screens/HomeScreen';
import { useAuth } from '../context/AuthContext';

export type RootStackParamList = {
  IntroScreen01: undefined;
  LanguageScreen: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
  LoginScreen01: undefined;
  HomeScreen01: undefined;
  ProfileScreen: undefined;
  youtubeoverlay: undefined;
  HomeScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

const RootNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="IntroScreen01" component={IntroScreen01} />
        <RootStack.Screen name="LanguageScreen" component={LanguageScreen} />
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="LoginScreen01" component={LoginScreen01} />
        <RootStack.Screen name="HomeScreen01" component={HomeScreen01} />
        {isAuthenticated && (
          <>
            <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
            <RootStack.Screen name="youtubeoverlay" component={youtubeoverlay} />
            <RootStack.Screen name="HomeScreen" component={HomeScreen} />
          </>
        )}
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;