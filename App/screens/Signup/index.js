import React from 'react';
import {Content, Form, Item, Input, Label, Button, Text} from 'native-base';

const Signup = () => {
  return (
    <Content style={{margin: 10}}>
      <Form>
        <Item stackedLabel>
          <Label>Name</Label>
          <Input />
        </Item>
        <Item stackedLabel>
          <Label>Email</Label>
          <Input />
        </Item>
        <Item stackedLabel>
          <Label>Password</Label>
          <Input />
        </Item>
      </Form>
      <Button block success>
        <Text>SIGN UP</Text>
      </Button>
      <Text>
        Already have an account?
        <Button transparent small>
          <Text>Sign in</Text>
        </Button>
      </Text>
    </Content>
  );
};

export default Signup;
