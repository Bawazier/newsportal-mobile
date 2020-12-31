/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Content, List, ListItem, Text} from 'native-base';
import {FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Topics = () => {
  return (
    <Content>
      <List>
        {/* <ListItem itemDivider>
          <Text>USER</Text>
        </ListItem>
        <ListItem>
          <Text>Favorite</Text>
        </ListItem>
        <ListItem>
          <Text>News</Text>
        </ListItem> */}
        <ListItem itemDivider>
          <Text>EXPLORE TOPICS</Text>
        </ListItem>
        {/* <FlatList
          data={topics.data}
          onEndReached={() => onNext}
          onEndReachedThreshold={0.5}
          renderItem={({item}) => (
            <ListItem
              style={{
                padding: 20,
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
              onPress={() => pressTopics(item.id)}>
              <Text>{item.title}</Text>
              <Text note>{item.subTitle}</Text>
            </ListItem>
          )}
        /> */}
      </List>
    </Content>
  );
};

export default Topics;
