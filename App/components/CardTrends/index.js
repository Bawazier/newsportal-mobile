/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {format} from 'date-fns';
import {Thumbnail, Left, Body} from 'native-base';
import {
  StyledCard,
  StyledCardItem,
  StyledViewLeft,
  StyledViewsRight,
  StyledTextCount,
} from './styled';
import {TextTitleStyled, TextSecondaryStyled} from '../../styles';

const CardTrends = (props) => {
  return (
    <StyledCard transparent>
      <StyledViewLeft>
        <StyledTextCount>{props.count || 0}</StyledTextCount>
      </StyledViewLeft>
      <StyledViewsRight>
        <StyledCardItem>
          <Left>
            <Thumbnail
              source={
                props.thumbnail
                  ? {
                      uri: props.thumbnail,
                    }
                  : {
                      uri:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                    }
              }
              style={{height: 20, width: 20}}
            />
            <Body>
              <TextSecondaryStyled>
                {props.userName || 'news portal'}
              </TextSecondaryStyled>
            </Body>
          </Left>
        </StyledCardItem>

        <StyledCardItem>
          <TextTitleStyled>{props.title || 'news portal'}</TextTitleStyled>
        </StyledCardItem>
        <StyledCardItem>
          <Left>
            <TextSecondaryStyled noted>
              {format(new Date(props.createdAt || Date.now()), 'MMM d')}
            </TextSecondaryStyled>
            <TextSecondaryStyled>&bull;</TextSecondaryStyled>
            <TextSecondaryStyled noted>
              {props.estimationRead || 0} min read
            </TextSecondaryStyled>
          </Left>
        </StyledCardItem>
      </StyledViewsRight>
    </StyledCard>
  );
};

export default CardTrends;
