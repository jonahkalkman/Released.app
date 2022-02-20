import styled from 'styled-components/native';

export const CardWrapper = styled.View`
  min-width: 100%;
  border-radius: 5px;
  margin-bottom: 25px;
  background-color: white;
  flex-direction: row;
`;

export const CardImage = styled.Image`
  width: 100px;
  height: 100px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

export const CardDetails = styled.View`
  padding: 20px;
`;

export const CardTitle = styled.Text`
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const CardTag = styled.Text`
  padding: 10px;
  color: white;
  background-color: black;
  font-size: 16px;
  border-radius: 5px;
`;
