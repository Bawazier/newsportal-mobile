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
  Right,
} from 'native-base';
import {Image} from 'react-native';
import {TextTitleStyled} from '../../styles';

const CardDetails = (props) => {
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
        <Right>
          <Icon
            name={
              !props.login.length ? '' : props.love ? 'bookmark' : 'bookmark-o'
            }
            type="FontAwesome"
            onPress={props.onPressLove}
          />
        </Right>
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
          <TextTitleStyled style={{marginVertical: 20}}>
            {props.title || 'Story Title'}
          </TextTitleStyled>
          <Text>{props.story.replace('\n\n', '---------------')}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

export default CardDetails;
