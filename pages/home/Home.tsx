import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styling from './styles';

import { Release } from '../../api/types';
import Card from '../../components/card/Card';

export default function Home() {

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
            <Card release={release} key={index} /> 
          )
      })}
    </ScrollView>
  );
};