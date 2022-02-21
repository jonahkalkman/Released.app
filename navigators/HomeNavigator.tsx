import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home/Home';
import Details from '../pages/details/Details';
import Header from '../components/header/Header';

const HomeStack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator  
      screenOptions={{
        headerShown: false,
        header: () => <Header />,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};