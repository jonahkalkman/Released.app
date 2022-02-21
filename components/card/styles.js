import styled from 'styled-components/native';

export const CardWrapper = styled.View`
  border-radius: 5px;
  background-color: white;
  flex-direction: row;
`;

export const CardImage = styled.Image`
  width: 100px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

export const CardDetails = styled.View`
  padding: 20px;
  flex: 1;
`;

export const CardTitle = styled.Text`
  color: black;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardTags = styled.View` 
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardTag = styled.View`
  align-self: flex-start;
  padding: 5px 10px;
  background-color: black;
  border-radius: 5px;
  margin-right: 10px;
`;

export const CardTagText = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 12px;
`;

export const CardButton = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 20px;
  top: 0px;
  bottom: 0px;
`;

