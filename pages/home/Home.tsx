import React from 'react';
import { HomeTitle, HomeWrapper } from './styles'
import { Release } from '../../api/types';
import Card from '../../components/card/Card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/HomeNavigator'
import { Button, Image, ScrollView, Text, View } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

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
    <ScrollView style={{backgroundColor: 'black'}}>
      <HomeWrapper>
        <HomeTitle>Your Releases</HomeTitle>
        {releases.map((prop, key) => {
          return (
            <Card release={prop} key={key}/>
          );
        })}
      </HomeWrapper>
    </ScrollView>
  );
};