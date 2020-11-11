import React from 'react';
import {StyledViewItem, StyledTextInput} from './styled';
import {Content, Item, Segment, Button, Text} from 'native-base';
import CardStory from '../../components/CardStory';

const Search = () => {
  return (
    <Content>
      <StyledViewItem>
        <Item>
          <StyledTextInput placeholder="Search" />
        </Item>
        <Segment>
          <Button first active>
            <Text>Stories</Text>
          </Button>
          <Button active>
            <Text>Topics</Text>
          </Button>
          <Button last active>
            <Text>Persons</Text>
          </Button>
        </Segment>
        {[...Array(10)].map((item) => (
          <CardStory />
        ))}
      </StyledViewItem>
    </Content>
  );
};

export default Search;
