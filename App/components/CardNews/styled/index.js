import styled from 'styled-components/native';
import {Card, CardItem} from 'native-base';
import {Image} from 'react-native';

export const StyledCard = styled(Card)`
  width: 320px;
  height: auto;
  flex-direction: row;
  align-items: flex-start;
  margin: 10px;
`;

export const StyledCardItem = styled(CardItem)`
  padding: 4px 0;
  margin: 0;
  width: 100%;
`;

export const StyledViewLeft = styled.View`
  width: 200px;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledViewsRight = styled.View`
  width: 110px;
  height: 100%;
  margin-left: 10px;
  align-items: center;
`;

export const StyledTextCount = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #e6e6e6;
  text-align: center;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100px;
  border: 1px solid black;
`;
