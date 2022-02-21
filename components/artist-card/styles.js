import styled from 'styled-components/native';

export const ArtistCardWrapper = styled.Pressable`
  background-color: white;
  border-radius: 5px;
  align-self: flex-start;
  margin-right: 20px;
  margin-bottom: 40px;
`;

export const ArtistCardImage = styled.Image`
  height: 140px;
  width: 140px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const ArtistCardDetails = styled.View`
  padding: 10px;
`;

export const ArtistCardTitle = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: 600;
  fontFamily: 'Montserrat_600SemiBold';
  margin-bottom: 10px;
`;