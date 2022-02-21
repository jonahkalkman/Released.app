import styled from 'styled-components/native';

export const SearchWrapper = styled.ScrollView`
  background-color: black;
  padding: 20px;
`;

export const SearchTitle = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  align-self: flex-start;
`;

export const SearchInput = styled.TextInput`
  background-color: white;
  padding: 18px 20px;
  border-radius: 5px;
  margin-bottom: 30px;
  color: black;
`;