import React from 'react';

import { Release } from '../../api/types';
import { CardWrapper, CardImage, CardDetails, CardTitle, CardTag, CardTagText, CardTags, CardButton } from './styles'
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
        <CardTags>
          {artists.slice(0, 2).map((artist) => 
            <CardTag>
              <CardTagText>{artist}</CardTagText>
            </CardTag>
          )}
        </CardTags>
        {/* <CardButton>
          <PlayButton url='w'></PlayButton>
        </CardButton> */}
      </CardDetails>
    </CardWrapper>
  );
};