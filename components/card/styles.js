import styled from 'styled-components/native';

export const CardWrapper = styled.View`
  border-radius: 5px;
  flex-direction: row;
  margin-bottom: 25px;
`;

export const CardImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const CardDetails = styled.View`
  padding: 5px 15px;
  flex: 1;
`;

export const CardTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const CardTags = styled.View` 
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardTag = styled.View`
  align-self: flex-start;
  margin-right: 10px;
`;

export const CardTagText = styled.Text`
  color: grey;
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

