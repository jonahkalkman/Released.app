import styled from 'styled-components/native';

interface FollowButtonWrapperProps {
  isActive: Boolean
}

export const FollowButtonWrapper = styled.Pressable<FollowButtonWrapperProps>`
  background-color: ${props => (!props.isActive ? '#63B9EC' : '#48C993')};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  padding: 3px 6px;
  border-radius: 2px;
`;

export const FollowButtonText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-left: 2px;
  fontFamily: 'Montserrat_600SemiBold';
`;