import React from 'react';

import { Release } from '../../api/types';
import { CardWrapper, CardImage, CardDetails, CardTitle, CardTag } from './styles'
import PlayButton from '../buttons/play-button/PlayButton'
import ShareButton from '../buttons/share-button/ShareButton'

interface Props {
  release: Release
}

export default function Card(props: Props) {
  const {name, artists} = props.release
  return (
    <CardWrapper>
        <CardImage
          source={{uri: 'https://picsum.photos/140/140'}}
        />
      <CardDetails>
        <CardTitle>{name}</CardTitle>
        {artists.map((artist) => 
          <CardTag>{artist}</CardTag>
        )}
      </CardDetails>
    </CardWrapper>
  );
};