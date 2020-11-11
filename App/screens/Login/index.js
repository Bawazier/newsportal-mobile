import React from 'react';
import {Content, Form, Item, Input, Label, Button, Text} from 'native-base';

const Login = () => {
  return (
    <Content style={{margin: 10}}>
      <Form>
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
        <Text>SIGN IN</Text>
      </Button>
      <Text>
        Dont have an account?
        <Button transparent small>
          <Text>Sign up</Text>
        </Button>
      </Text>
    </Content>
  );
};

export default Login;
