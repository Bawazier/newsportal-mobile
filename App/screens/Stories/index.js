import React from 'react';
import CardNews from '../../components/CardNews';
import {Content} from 'native-base';

const Stories = () => {
  return (
    <Content>
      {[...Array(5)].map((item) => (
        <CardNews />
      ))}
    </Content>
  );
};

export default Stories;
