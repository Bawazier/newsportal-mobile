import React from 'react';
import {
  StyledViewTitle,
  StyledViewItem,
  StyledTextTitle,
  StyledTextLabel,
  StyledTextInput,
  StyledTextSecondary,
} from './styled';
import {Content, Form, Textarea, Button, Thumbnail} from 'native-base';

const Setting = () => {
  return (
    <Content>
      <StyledViewTitle>
        <StyledTextTitle>About you</StyledTextTitle>
      </StyledViewTitle>
      <Form>
        <StyledViewItem>
          <StyledTextLabel>Name</StyledTextLabel>
          <StyledTextInput />
          <StyledTextSecondary note>
            Your name appears on your, Profile page, as your byline, and in your
            responses. It is a required field.
          </StyledTextSecondary>
          <Button bordered light>
            <StyledTextSecondary>Edit</StyledTextSecondary>
          </Button>
        </StyledViewItem>
        <StyledViewItem>
          <StyledTextLabel>Bio</StyledTextLabel>
          <Textarea rowSpan={5} />
          <StyledTextSecondary note>
            Your bio appears on your, Profile page. Max 160 characters
          </StyledTextSecondary>
          <Button bordered light>
            <StyledTextSecondary>Edit</StyledTextSecondary>
          </Button>
        </StyledViewItem>
        <StyledViewItem>
          <StyledTextLabel>Photo</StyledTextLabel>
          <Thumbnail source={require('../../assets/code.png')} />
          <StyledTextSecondary note>
            Your photo appears on your, Profile page. File type: JPG, PNG or
            GIF.
          </StyledTextSecondary>
          <Button bordered light>
            <StyledTextSecondary>Edit</StyledTextSecondary>
          </Button>
        </StyledViewItem>
      </Form>

      <StyledViewTitle>
        <StyledTextTitle>Account settings</StyledTextTitle>
      </StyledViewTitle>
      <Form>
        <StyledViewItem>
          <StyledTextLabel>Your Email</StyledTextLabel>
          <StyledTextInput />
          <Button bordered light>
            <StyledTextSecondary>Edit Email</StyledTextSecondary>
          </Button>
        </StyledViewItem>
        <StyledViewItem>
          <StyledTextLabel>Password</StyledTextLabel>
          <StyledTextInput />
          <Button bordered light>
            <StyledTextSecondary>Edit Password</StyledTextSecondary>
          </Button>
        </StyledViewItem>
      </Form>
    </Content>
  );
};

export default Setting;
