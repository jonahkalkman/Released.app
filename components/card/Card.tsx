import React from 'react';

import { Release } from '../../api/types';
import { CardWrapper, CardImage, CardDetails, CardTitle, CardButtons } from './styles'
import PlayButton from '../buttons/play-button/PlayButton'
import ShareButton from '../buttons/share-button/ShareButton'

interface Props {
  release: Release
}

export default function Card(props: Props) {
  return (
    <CardWrapper>
      <CardImage
        source={{uri: 'https://picsum.photos/140/140'}}
      />
      <CardDetails>
        <CardTitle>
          {props.release.name}
        </CardTitle>
        <CardButtons>
          <PlayButton url={props.release.url} />
          <ShareButton url={''} />
        </CardButtons>
      </CardDetails>
    </CardWrapper>
  );
};