import React from 'react';
import {Content, List, ListItem, Text} from 'native-base';

const Topics = () => {
  return (
    <Content>
      <List>
        <ListItem itemDivider>
          <Text>USER</Text>
        </ListItem>
        <ListItem>
          <Text>Favorite</Text>
        </ListItem>
        <ListItem>
          <Text>News</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text>EXPLORE TOPICS</Text>
        </ListItem>
        {[...Array(10)].map((item) => (
          <ListItem>
            <Text>Health</Text>
          </ListItem>
        ))}
      </List>
    </Content>
  );
};

export default Topics;
