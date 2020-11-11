import React, {useState} from 'react';
import {
  StyledViewTitle,
  StyledTextTitle,
  StyledTextLabel,
  StyledTextInput,
  StyledTextSecondary,
  StyledViewItem,
  StyledThumbnail,
} from './styled';
import {Content, Form, Item, Button, Textarea, Picker} from 'native-base';

const NewStory = () => {
  const [selected, setSelected] = useState('Choose Topics');
  const onValueChange = (value) => {
    setSelected(value);
  };
  return (
    <Content>
      <StyledViewTitle>
        <StyledTextTitle>What is your story?</StyledTextTitle>
      </StyledViewTitle>
      <Form>
        <Item stackedLabel>
          <StyledTextLabel>Title</StyledTextLabel>
          <StyledTextInput />
        </Item>
        <Item stackedLabel>
          <StyledTextLabel>Topics</StyledTextLabel>
          <Picker
            note
            mode="dropdown"
            style={{width: '100%'}}
            selectedValue={selected}
            onValueChange={onValueChange}>
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Item>
        <StyledViewItem>
          <StyledTextLabel>Thumbnail</StyledTextLabel>
          <StyledThumbnail source={require('../../assets/code.png')} />
          <StyledTextSecondary note>
            File type: JPG, PNG or GIF.
          </StyledTextSecondary>
          <Button bordered light>
            <StyledTextSecondary>Chooso Image</StyledTextSecondary>
          </Button>
        </StyledViewItem>
        <StyledViewItem>
          <StyledTextLabel>Topics</StyledTextLabel>
          <Textarea rowSpan={20} bordered />
        </StyledViewItem>
        <StyledViewItem>
          <Button bordered large success>
            <StyledTextSecondary>PUBLISH</StyledTextSecondary>
          </Button>
        </StyledViewItem>
      </Form>
    </Content>
  );
};

export default NewStory;
