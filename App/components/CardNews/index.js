import React from 'react';
import {format} from 'date-fns';
import {Thumbnail, Left, Body} from 'native-base';
import {
  StyledCard,
  StyledCardItem,
  StyledViewLeft,
  StyledViewsRight,
  StyledImage,
} from './styled';
import {TextTitleStyled, TextSecondaryStyled} from '../../styles';

const CardNews = (props) => {
  return (
    <StyledCard transparent>
      <StyledViewLeft>
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
                {props.userName || 'Story Name'}
              </TextSecondaryStyled>
            </Body>
          </Left>
        </StyledCardItem>
        <StyledCardItem>
          <TextTitleStyled>{props.title || 'Story Title'}</TextTitleStyled>
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
      </StyledViewLeft>
      <StyledViewsRight>
        <StyledImage
          source={
            props.urlImage
              ? {
                  uri: props.urlImage,
                }
              : {
                  uri:
                    'https://jogjacourse.com/wp-content/uploads/2018/05/Kursus-React-Jogja.jpg',
                }
          }
        />
      </StyledViewsRight>
    </StyledCard>
  );
};

export default CardNews;
