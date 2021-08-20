import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

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
          tabBarIcon: ({ focused, color, size }) => {
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
            return <Ionicons name={iconName!} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#48C993',
          inactiveTintColor: 'gray',
          style:{
            backgroundColor: "black",
            height: 100,
            paddingTop: 10
          },
          labelStyle: {
            color: 'white'
          }
        }}
      >
        {props.pages.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.name} component={item.component} />
          );
        })} 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  NavigationContainer: {
    backgroundColor: '#FF0000',
  },
});
