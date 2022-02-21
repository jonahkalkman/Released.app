import React, { useState } from 'react';
import { FlatList, ScrollView, TextInput } from 'react-native';

import { SearchWrapper, SearchTitle, SearchInput } from './styles'
import { Artist } from '../../api/types'
import ArtistCard from '../../components/artist-card/ArtistCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators/SearchNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export default function Search({navigation}: Props) {
  const [searchText, setSearchText] = useState('');
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
    <ArtistCard url={item.name} artist={item}/>
  );

  const onChangeSearch = (val: string) => {
    setSearchText(val);
  };

  const onSubmitSearch = () => {
    console.log('hey!');
    // Search Spotify for the artist / query that is typed in.
    // Display search results inside SearchWrapper instead of base content
  };
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <SearchWrapper>
        <SearchInput 
          onChangeText={onChangeSearch} 
          value={searchText} 
          placeholder="Search for artists" 
          placeholderTextColor={'black'} 
          onSubmitEditing={onSubmitSearch}
        />
        <SearchTitle>Following artists</SearchTitle> 
        <FlatList data={artists} renderItem={renderArtist} horizontal={true} keyExtractor={(item, index) => 'key' + index} />
        <SearchTitle>Suggested artists</SearchTitle> 
        <FlatList data={artists} renderItem={renderArtist} horizontal={true} keyExtractor={(item, index) => 'key' + index} />
        <SearchTitle>Genres</SearchTitle> 
        <FlatList data={artists} renderItem={renderArtist} horizontal={true} keyExtractor={(item, index) => 'key' + index} />
      </SearchWrapper>
    </ScrollView>
  );
};
