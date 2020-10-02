import React, {useEffect} from 'react';
import {loadingStyle} from './styles'
import { View,StatusBar,Text } from 'react-native';
import Spinner from 'react-native-spinkit'

export default function Loading (props)  {
  useEffect(()=>{
    //console.log(props)
  },[])
  return (
      <View styles={loadingStyle.loadingView}>
          <Spinner style={loadingStyle.loadingSpinner} color={"#4cff44"}/>
          <Text style={loadingStyle.loadingText}>Recherche...</Text>
      </View>
  );
};

