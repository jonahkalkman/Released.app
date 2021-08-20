import React from 'react';
import { FlatList } from 'react-native';

import { SearchWrapper, SearchTitle } from './styles'
import { Artist } from '../../api/types'
import ArtistCard from '../../components/artist-card/ArtistCard';


export default function Search() {
  const artists: Artist[] = [
    {
      image: '',
      name: 'Drake',
      followers: 36
    },
    {
      image: '',
      name: 'Drake',
      followers: 36
    },
    {
      image: '',
      name: 'Drake',
      followers: 36
    },
    {
      image: '',
      name: 'Drake',
      followers: 36
    }
  ];

  const renderArtist = ({ item }: { item: Artist }) =>  (
    <ArtistCard url={item.name} artist={item} />
  );

  return (
    <SearchWrapper>
      <SearchTitle>Following artists</SearchTitle> 
      <FlatList data={artists} renderItem={renderArtist} horizontal={true} />
      <SearchTitle>Suggested artists</SearchTitle> 
      <FlatList data={artists} renderItem={renderArtist} horizontal={true} />
      <SearchTitle>Genres</SearchTitle> 
      <FlatList data={artists} renderItem={renderArtist} horizontal={true} />
    </SearchWrapper>
  );
};
