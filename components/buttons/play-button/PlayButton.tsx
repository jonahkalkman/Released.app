import React from 'react';
import { PlayButtonWrapper } from './styles'
import { Entypo } from '@expo/vector-icons';


interface Props {
  url: string;
}

export default function PlayButton(props: Props) {
  return (
    <Entypo name="controller-play" size={35} color="white" />
  );
};