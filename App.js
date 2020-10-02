/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import Route from './src/Screens/rootNavigator'
import SplashScreen from 'react-native-splash-screen'
import { View,StatusBar } from 'react-native';


export default function App ()  {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
      <Route/>
  );
};

