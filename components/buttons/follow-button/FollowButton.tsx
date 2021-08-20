import React from 'react';
import { FollowButtonWrapper, FollowButtonText } from './styles'
import { Entypo } from '@expo/vector-icons';

import { Artist } from '../../../api/types';
import { useState } from 'react';

interface Props {
  artist: Artist
}

export default function FollowButton(props: Props) {
  const [isActive, setIsActive] = useState<Boolean>(false);

  const onPress = (artist: Artist) => {
    console.log(artist);
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <FollowButtonWrapper onPress={() => onPress(props.artist)} isActive={isActive}>
      {isActive ? (
        <Entypo name="check" size={15} color="white" />
      ): 
        <Entypo name="plus" size={15} color="white" />
      }
      <FollowButtonText>Follow</FollowButtonText>
    </FollowButtonWrapper>
  );
};