import styled from 'styled-components/native';
import {Card, CardItem} from 'native-base';

export const StyledCard = styled(Card)`
  width: 300px;
  height: auto;
  flex-direction: row;
  align-items: flex-start;
`;

export const StyledCardItem = styled(CardItem)`
  padding: 4px 0;
  margin: 0;
  width: 100%;
`;

export const StyledViewLeft = styled.View`
  width: 50px;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledViewsRight = styled.View`
  height: 100%;
  align-items: flex-start;
`;

export const StyledTextCount = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #e6e6e6;
  text-align: center;
`;
