import React from 'react';
import { ArtistCardWrapper, ArtistCardImage, ArtistCardDetails, ArtistCardTitle } from './styles'
import { Artist } from '../../api/types'
import FollowButton from '../buttons/follow-button/FollowButton';

interface Props {
  url: string;
  artist: Artist;
}

export default function ArtistCard(props: Props) {
  return (
    <ArtistCardWrapper onPress={() => props.url}>
      <ArtistCardImage source={{uri: 'https://picsum.photos/140/140'}}/>
      <ArtistCardDetails>
        <ArtistCardTitle>{props.artist.name}</ArtistCardTitle>
        <FollowButton artist={props.artist} /> 
      </ArtistCardDetails>
    </ArtistCardWrapper>
  );
};