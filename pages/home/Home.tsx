import React from 'react';
import { Text, View, ScrollView, Pressable } from 'react-native';
import styling from './styles';

import { Release } from '../../api/types';
import Card from '../../components/card/Card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/HomeNavigator'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function Home({navigation}: Props) {

  const releases: Release[] = [
    {
      name: 'Passion fruit',
      artists: ['Drake'],
      image: 'https://via.placeholder.com/150',
      releaseDate: new Date(),
      url: 'https://via.placeholder.com/150'
    },
    {
      name: 'Passion fruit',
      artists: ['Drake'],
      image: 'https://via.placeholder.com/150',
      releaseDate: new Date(),
      url: 'https://via.placeholder.com/150'
    }
    ,
    {
      name: 'Passion fruit',
      artists: ['Drake'],
      image: 'https://via.placeholder.com/150',
      releaseDate: new Date(),
      url: 'https://via.placeholder.com/150'
    }
    ,
    {
      name: 'Passion fruit',
      artists: ['Drake'],
      image: 'https://via.placeholder.com/150',
      releaseDate: new Date(),
      url: 'https://via.placeholder.com/150'
    }
    ,
    {
      name: 'Passion fruit',
      artists: ['Drake'],
      image: 'https://via.placeholder.com/150',
      releaseDate: new Date(),
      url: 'https://via.placeholder.com/150'
    }
    ,
    {
      name: 'Passion fruit',
      artists: ['Drake'],
      image: 'https://via.placeholder.com/150',
      releaseDate: new Date(),
      url: 'https://via.placeholder.com/150'
    }
    ,
    {
      name: 'Passion fruit',
      artists: ['Drake'],
      image: 'https://via.placeholder.com/150',
      releaseDate: new Date(),
      url: 'https://via.placeholder.com/150'
    }
    ,
    {
      name: 'Passion fruit',
      artists: ['Drake'],
      image: 'https://via.placeholder.com/150',
      releaseDate: new Date(),
      url: 'https://via.placeholder.com/150'
    }

  ]
  return (
    <ScrollView style={styling.container}>
      <Text style={styling.title}>Your releases</Text>
      {releases.map((release, index) => {
        return ( 
          <Pressable onPress={() => navigation.navigate('Details')}>
            <Card release={release} key={index} /> 
          </Pressable>
          )
      })}
    </ScrollView>
  );
};