/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
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
          <StyledTextInput
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          // onSubmitEditing={submitEditing}
          // editable={editName}
          // autoFocus={editName}
          />
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
          <Textarea
            rowSpan={5}
            // value={bio}
            // onChange={(e) => setBio(e.target.value)}
            // onSubmitEditing={submitEditing}
            // editable={editBio}
            // autoFocus={editBio}
          />
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
          <StyledTextInput
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          // onSubmitEditing={submitEditing}
          // editable={editEmail}
          // autoFocus={editEmail}
          />
          <Button bordered light>
            <StyledTextSecondary>Edit Email</StyledTextSecondary>
          </Button>
        </StyledViewItem>
        <StyledViewItem>
          <StyledTextLabel>Password</StyledTextLabel>
          <Button bordered light>
            <StyledTextSecondary>Edit Password</StyledTextSecondary>
          </Button>
        </StyledViewItem>
      </Form>
    </Content>
  );
};

export default Setting;
