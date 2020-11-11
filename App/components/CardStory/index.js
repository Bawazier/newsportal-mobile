import React from 'react';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';
import {Image} from 'react-native';
import {TextTitleStyled} from '../../styles';

const CardStory = () => {
  return (
    <Card transparent style={{flex: 0}}>
      <CardItem>
        <Left>
          <Thumbnail source={require('../../assets/timun.jpg')} />
          <Body>
            <Text>NativeBase</Text>
            <Text note>April 15, 2016</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Image
            source={require('../../assets/code.png')}
            style={{height: 200, width: '100%', flex: 1}}
          />
          <TextTitleStyled>
            React Native: "write one run anyware", true or false?
          </TextTitleStyled>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent textStyle={{color: '#87838B'}}>
            <Icon name="logo-github" />
            <Text note>1,926 stars</Text>
          </Button>
        </Left>
      </CardItem>
    </Card>
  );
};

export default CardStory;
