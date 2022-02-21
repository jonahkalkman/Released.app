import React from 'react';
import Svg, { Path } from "react-native-svg"
import {HeaderComp, HeaderLogo, HeaderProfile} from './styles.js'

interface Props {
}

export default function Header(props: Props) {
  return (
    <HeaderComp>
      <HeaderLogo source={require('../../assets/logo.png')}></HeaderLogo>
      <HeaderProfile
        onPress={()  => {}}
      >
        <Svg
          width={21}
          height={21}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Path
            d="M17.5 18.375v-1.75a3.5 3.5 0 0 0-3.5-3.5H7a3.5 3.5 0 0 0-3.5 3.5v1.75M10.5 9.625a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </HeaderProfile>
    </HeaderComp>
  );
};