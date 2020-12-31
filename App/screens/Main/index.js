/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  TextStyled,
  StyledContent,
  TextButtonTransparentStyled,
} from '../../styles';
import {StyledViewTitle, StyledViewTopics} from './styled';
import {Icon, Button, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import CardTrends from '../../components/CardTrends';
import CardNews from '../../components/CardNews';

import {useNavigation} from '@react-navigation/native';
import {APP_URL} from '@env';

const Main = () => {
  return (
    <StyledContent>
      <StyledViewTitle>
        <Icon
          name="line-chart"
          type="FontAwesome"
          style={{marginHorizontal: 10, fontSize: 20}}
        />
        <TextStyled>TRENDING</TextStyled>
      </StyledViewTitle>
      {[...Array(5)].map((item) => {
        return (
          <TouchableOpacity>
            <CardTrends
            // count={count++}
            // thumbnail={false}
            // userName={item.User.name}
            // title={item.title}
            // createdAt={item.createdAt}
            // estimationRead={parseInt(item.story.length / 200)}
            />
          </TouchableOpacity>
        );
      })}
      <StyledViewTitle>
        <Icon name="category" type="MaterialIcons" />
        <TextStyled>Discover more of what matters to you</TextStyled>
      </StyledViewTitle>
      <StyledViewTopics>
        {[...Array(5)].map((item) => (
          <Button bordered light small style={{margin: 5}}>
            {/* <Text>{item.title || 'topics'}</Text> */}
          </Button>
        ))}
      </StyledViewTopics>
      <Button transparent small>
        <TextButtonTransparentStyled>
          See all topics
        </TextButtonTransparentStyled>
      </Button>
      <StyledViewTitle>
        <Icon
          name="newspaper"
          type="FontAwesome5"
          style={{marginHorizontal: 10, fontSize: 20}}
        />
        <TextStyled>NEWS</TextStyled>
      </StyledViewTitle>
      {[...Array(5)].map((item) => (
        <TouchableOpacity>
          <CardNews
          // thumbnail={APP_URL + item.User.photo}
          // userName={item.User.name}
          // title={item.title}
          // createdAt={item.createdAt}
          // estimationRead={parseInt(item.story.length / 200)}
          // urlImage={item.URL_thumbnail}
          />
        </TouchableOpacity>
      ))}
    </StyledContent>
  );
};

export default Main;
