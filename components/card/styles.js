import styled from 'styled-components/native';

export const CardWrapper = styled.View`
  height: 140px;
  min-width: 100%;
  border-radius: 5px;
  margin-bottom: 25px;
  background-color: #202020;
  flex-direction: row;
`;

export const CardImage = styled.Image`
  width: 140px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const CardDetails = styled.View`
  padding: 20px;
`;

export const CardTitle = styled.Text`
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const CardButtons = styled.View`
  flex-direction: row;
`;
