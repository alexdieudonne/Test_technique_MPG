import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../Screens/DetailsScreen'
import SplashScreen from '../Screens/SplashScreen'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#4cff44" />
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="Home" component={SplashScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} options={navigation => ({
           cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
                backgroundColor:"#fff"
              }
            }
          }, headerShown: false
        })} sharedElementsConfig={(route) => {
          const { data } = route.params
          return [
            {
              id: `item.${data.id}.name`,
              animation: 'fade',
              resize: 'auto',
              align:'left-center'
         
            },
            {
              id: `item.${data.id}.poste`,
              animation: 'fade-out',
              resize:'clip',
              align:'left-center'
              
             
            },
            {
              id: `item.${data.id}.equip`,
              animation: 'fade',
              resize: 'clip',
              align:'left-center'
             
            },
            
          ]
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

