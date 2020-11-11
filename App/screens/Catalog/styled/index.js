import styled from 'styled-components/native';
import {Label, Input, Text} from 'native-base';
import {Image} from 'react-native';

export const StyledViewTitle = styled.View`
  margin: 20px;
`;

export const StyledViewItem = styled.View`
  margin: 20px;
`;

export const StyledTextTitle = styled(Text)`
  font-weight: bold;
  font-size: 27px;
`;

export const StyledTextLabel = styled(Label)`
  font-weight: bold;
  font-size: 21px;
`;

export const StyledTextInput = styled(Input)`
  font-size: 20px;
`;

export const StyledTextSecondary = styled(Text)`
  font-size: 16px;
`;

export const StyledThumbnail = styled(Image)`
  width: null;
  height: 200px;
`;
