import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from '../pages/search/Search';
import Details from '../pages/details/Details';
import Header from '../components/header/Header';

const SearchStack = createNativeStackNavigator();

export type RootStackParamList = {
  Search: undefined;
  Details: undefined;
};

export default function SearchStackNavigator() {
  return (
    <SearchStack.Navigator  
      screenOptions={{
        headerShown: false,
        header: () => <Header />,
      }}
    >
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="Details" component={Details} />
    </SearchStack.Navigator>
  );
};