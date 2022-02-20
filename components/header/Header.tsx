import React from 'react';
import {HeaderComp, HeaderLogo} from './styles.js'

interface Props {
}

export default function Header(props: Props) {
  return (
    <HeaderComp>
      <HeaderLogo source={require('../../assets/logo.png')}></HeaderLogo>
    </HeaderComp>
  );
};