import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyledViewItem, StyledTextInput} from './styled';
import {Content, Item, Segment, Button, Text} from 'native-base';
import CardStory from '../../components/CardStory';

const Search = () => {
  return (
    <Content>
      <StyledViewItem>
        <Item>
          <StyledTextInput
            placeholder="Search"
            // onSubmitEditing={onSubmitSearch}
          />
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
        {true ? (
          [...Array(5)].map((item) => (
            <CardStory
            // thumbnail={false}
            // userName="Tressie15"
            // createdAt={item.createdAt}
            // urlImage={item.URL_thumbnail}
            // title={item.title}
            // stars={0}
            />
          ))
        ) : (
          <Text>&nbsp;</Text>
        )}
      </StyledViewItem>
    </Content>
  );
};

export default Search;
