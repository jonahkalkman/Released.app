import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home/Home';
import Details from '../pages/details/Details';

const HomeStack = createNativeStackNavigator();

import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator  
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};