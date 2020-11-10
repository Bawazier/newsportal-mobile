import React from 'react';
import {Thumbnail, Left, Body} from 'native-base';
import {
  StyledCard,
  StyledCardItem,
  StyledViewLeft,
  StyledViewsRight,
  StyledImage,
} from './styled';
import {TextTitleStyled, TextSecondaryStyled} from '../../styles';

const CardNews = () => {
  return (
    <StyledCard transparent>
      <StyledViewLeft>
        <StyledCardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
              }}
              style={{height: 20, width: 20}}
            />
            <Body>
              <TextSecondaryStyled>NativeBase</TextSecondaryStyled>
            </Body>
          </Left>
        </StyledCardItem>
        <StyledCardItem>
          <TextTitleStyled>
            React Native: "write one run anyware", true or false?
          </TextTitleStyled>
        </StyledCardItem>
        <StyledCardItem>
          <Left>
            <TextSecondaryStyled noted>Nov 8</TextSecondaryStyled>
            <TextSecondaryStyled noted>2 min read</TextSecondaryStyled>
          </Left>
        </StyledCardItem>
      </StyledViewLeft>
      <StyledViewsRight>
        <StyledImage source={require('../../assets/code.png')} />
      </StyledViewsRight>
    </StyledCard>
  );
};

export default CardNews;
