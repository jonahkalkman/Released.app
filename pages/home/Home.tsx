import React from 'react';
import { ScrollView } from 'react-native';
import { formatDistance } from "date-fns";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeTitle, HomeWrapper, HomeCardDate } from './styles'
import { Release } from '../../api/types';
import Card from '../../components/card/Card';
import { RootStackParamList } from '../../navigators/HomeNavigator'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: Props) {

  const releases: Release[] = [
    {
      name: 'Passion fruit',
      artists: ['Drake', 'Kanye', 'Eminem', 'New one'],
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

  ];
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <HomeWrapper>
        <HomeTitle>Your Releases</HomeTitle>
        {releases.map((prop, key) => {
          return (
            <>
              <Card release={prop} key={key}/>
              <HomeCardDate style={{color: 'white', textAlign: 'right'}}>{formatDistance(prop.releaseDate, new Date(), { addSuffix: true })}</HomeCardDate>
            </>
          );
        })}
      </HomeWrapper>
    </ScrollView>
  );
};