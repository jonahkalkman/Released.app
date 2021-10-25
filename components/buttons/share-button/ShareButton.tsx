import React from 'react';
import { ShareButtonWrapper } from './styles'
import { Entypo } from '@expo/vector-icons';


interface Props {
  url: string;
}

export default function ShareButton(props: Props) {
  return (
    <ShareButtonWrapper onPress={() => props.url}>
      <Entypo name="reply" size={20} color="white" style={{transform: [{scaleX: -1}]}}/>
    </ShareButtonWrapper>
  );
};