import React from 'react';
import {StyledViewTitle} from './styled';
import {Content} from 'native-base';
import CardStory from '../../components/CardStory';

const Catalog = () => {
  return (
    <Content>
      <StyledViewTitle>
        {[...Array(10)].map((item) => (
          <CardStory />
        ))}
      </StyledViewTitle>
    </Content>
  );
};

export default Catalog;
