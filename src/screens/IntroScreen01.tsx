  import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
  import React, { useRef, useEffect } from 'react'
  import { RootStackScreenProps } from '../../navigators/RootNavigator'
  import { SafeAreaView } from 'react-native-safe-area-context'
  import Logo01 from '../components/untitled folder 2/Logo01'
  import Icons from "@expo/vector-icons/MaterialCommunityIcons"

  const IntroScreen = ({navigation}:RootStackScreenProps<"IntroScreen01">) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.parallel([
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
          }
        ),
        Animated.timing(
          slideAnim,
          {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
          }
        )
      ]).start();
    }, [fadeAnim, slideAnim]);

    return (
      <SafeAreaView style={styles.container}>
        <Animated.View style={{alignItems: 'center', opacity: fadeAnim}}>
          <Logo01 height={500} width={350}/>
        </Animated.View> 
        <Animated.View style={{alignItems: 'center', marginTop: 70, transform: [{ translateY: slideAnim.interpolate({ inputRange: [0, 1], outputRange: [100, 0] }) }]}}>
          <TouchableOpacity style={{backgroundColor: "#FFC107", paddingHorizontal: 32, height: 52, borderRadius: 100, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate("LanguageScreen")}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>Let's get started <Icons name='arrow-right-bold' size={18}/></Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    )
  }

  export default IntroScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ABD6E2', //#ABD6E2
    },
  });
