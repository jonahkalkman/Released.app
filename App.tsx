import React from 'react';
import AppLoading from 'expo-app-loading';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import HomeStackScreen from './navigators/HomeNavigator';
import Search from './pages/search/Search';
import Settings from './pages/settings/Settings';
import Menu from './components/menu/Menu';
import { SafeAreaView } from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Menu pages={[
          {name: 'Releases', component: HomeStackScreen}, 
          {name: 'Zoeken', component: Search},
          {name: 'Instellingen', component: Settings}
        ]}
      />
    </SafeAreaView>
  );
};
