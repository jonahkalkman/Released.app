import React from 'react';
import { Pressable } from 'react-native';
import { HomeWrapper, HomeTitle } from './styles'

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
    <HomeWrapper contentContainerStyle={{justifyContent: 'center', alignItems: 'center',}}>
      <HomeTitle>Latest releases</HomeTitle>
      {releases.map((release, index) => {
        return ( 
          <Pressable onPress={() => navigation.navigate('Details')} key={index}>
            <Card release={release} /> 
          </Pressable>
        )
      })}
    </HomeWrapper>
  );
};