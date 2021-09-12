import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from '../pages/search/Search';
import Details from '../pages/details/Details';

const SearchStack = createNativeStackNavigator();

export default function SearchStackNavigator() {
  return (
    <SearchStack.Navigator  
      screenOptions={{
        headerShown: false
      }}
    >
      <SearchStack.Screen name="Home" component={Search} />
      <SearchStack.Screen name="Details" component={Details} />
    </SearchStack.Navigator>
  );
};