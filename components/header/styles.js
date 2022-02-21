import styled from 'styled-components/native';

export const HeaderComp = styled.View`
  background-color: black;
  padding: 16px 16px; 
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.Image`
  height: 40px;
  width: 40px;
`;

export const HeaderProfile = styled.Pressable`
  padding: 10px;
  background-color: grey;
  border-radius: 50px;
`;