import React from 'react';
import { View, Image } from 'react-native';

import { Release } from '../../api/types';
import { CardWrapper, CardImage, CardDetails, CardTitle, CardTags, CardTag, CardButtons } from './styles'
import PlayButton from '../buttons/play-button/PlayButton'
import ShareButton from '../buttons/share-button/ShareButton'

interface Props {
  release: Release
}

export default function Card(props: Props) {
  return (
    <CardWrapper>
      <CardImage
        source={{uri: props.release.image}}
      />
      <CardDetails>
        <CardTitle>
          {props.release.name}
        </CardTitle>
        <CardTags>
          {props.release.artists.map((artist, index) => {
            return ( 
              <CardTag key={index}>
                {artist}
              </CardTag> 
            )
          })}
        </CardTags>
        <CardButtons>
          <PlayButton url={props.release.url}></PlayButton>
          <ShareButton url={''}></ShareButton>
        </CardButtons>
      </CardDetails>
    </CardWrapper>
  );
};