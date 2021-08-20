import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Settings from './pages/settings/Settings';
import Menu from './components/menu/Menu';


const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Menu pages={[
        {name: 'Releases', component: Home}, 
        {name: 'Zoeken', component: Search},
        {name: 'Instellingen', component: Settings}
      ]}
    />
  );
};