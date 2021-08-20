import styled from 'styled-components/native';

export const CardWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
`;

export const CardImage = styled.Image`
  height: 103px;
  width: 103px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const CardDetails = styled.View`
  height: 103px;
  padding: 12px;
  background-color: #202020;
  flex: 1;
`;

export const CardButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardTitle = styled.Text`
  color: white;
  font-size: 14px;
  margin-bottom: 9px;
`;

export const CardTags = styled.View`
`;

export const CardTag = styled.Text`
  background-color: #000000;
  color: white;
  font-size: 9px;
  padding: 5px;
  align-self: flex-start;
  border-radius: 5px;
  margin-bottom: 10px;
`;