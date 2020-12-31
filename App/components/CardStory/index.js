import React from 'react';
import {format} from 'date-fns';
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

const CardStory = (props) => {
  return (
    <Card transparent style={{flex: 0}}>
      <CardItem>
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
          />
          <Body>
            <Text>{props.userName || 'Story Name'}</Text>
            <Text note>
              {format(new Date(props.createdAt || Date.now()), 'MMMM dd')}
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Image
            source={
              props.urlImage
                ? {
                    uri: props.urlImage,
                  }
                : {
                    uri:
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                  }
            }
            style={{height: 200, width: '100%', flex: 1}}
          />
          <TextTitleStyled>{props.title || 'Title Story'}</TextTitleStyled>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Icon name="logo-github" />
          <Text note>{props.stars || 5} stars</Text>
        </Left>
      </CardItem>
    </Card>
  );
};

export default CardStory;
