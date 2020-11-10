import React from 'react';
import {
  TextStyled,
  StyledContent,
  TextButtonTransparentStyled,
} from '../../styles';
import {StyledViewTitle, StyledViewTopics} from './styled';
import {Icon, Button, Text} from 'native-base';
import CardTrends from '../../components/CardTrends';
import CardNews from '../../components/CardNews';

const Main = () => {
  const getMapSize = (x) => {
    var len = 0;
    for (var count in x) {
      len++;
    }
    return len;
  };

  return (
    <StyledContent>
      <StyledViewTitle>
        <Icon name="trending-up" type="Ionicons" />
        <TextStyled>TRENDING</TextStyled>
      </StyledViewTitle>
      {[...Array(5)].map((item) => (
        <CardTrends count={getMapSize(item)} />
      ))}
      <StyledViewTitle>
        <Icon name="trending-up" type="Ionicons" />
        <TextStyled>Discover more of what matters to you</TextStyled>
      </StyledViewTitle>
      <StyledViewTopics>
        {[...Array(7)].map((item) => (
          <Button bordered light small style={{margin: 5}}>
            <Text>Programming</Text>
          </Button>
        ))}
      </StyledViewTopics>
      <Button transparent small>
        <TextButtonTransparentStyled>
          See all topics
        </TextButtonTransparentStyled>
      </Button>
      <StyledViewTitle>
        <Icon name="trending-up" type="Ionicons" />
        <TextStyled>NEWS</TextStyled>
      </StyledViewTitle>
      {[...Array(10)].map((item) => (
        <CardNews />
      ))}
    </StyledContent>
  );
};

export default Main;
