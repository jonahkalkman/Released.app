import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

interface Page {
  name: string;
  component: any;
}

interface Props {
  pages: Page[]
}

export default function Menu(props: Props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName: string; 
            if (route.name === 'Releases') {
              iconName = focused
                ? 'md-notifications'
                : 'md-notifications-outline';
            } else if (route.name === 'Zoeken') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'Instellingen') {
              iconName = focused ? 'ellipsis-vertical' : 'ellipsis-vertical';
            }
            return <Ionicons name={iconName!} size={20} color={color} />;
          },
          tabBarIndicatorContainerStyle: {
            backgroundColor: 'black',
          },
          tabBarActiveTintColor: 'white',
          tabBarShowLabel: false
        })}
        tabBarPosition='bottom'
      >
        {props.pages.map((item, index) => {
          return (
            <Tab.Screen 
              key={index} 
              name={item.name} 
              component={item.component}    
              options={{ title: 'My home' }} 
            />
          );
        })} 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  NavigationContainer: {
    backgroundColor: 'transparent',
    borderTopColor: 'red',
    borderTopWidth: 30
  },
});
