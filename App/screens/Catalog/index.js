import React from 'react';
import {useSelector} from 'react-redux';
import {StyledViewTitle} from './styled';
import {Content} from 'native-base';
import CardStory from '../../components/CardStory';

const Catalog = () => {
  // const topicNews = useSelector((state) => state.topicNews);
  return (
    <Content>
      <StyledViewTitle>
        {/* {topicNews.data.map((item) => (
          <CardStory
            thumbnail={false}
            userName="Tressie15"
            createdAt={item.createdAt}
            urlImage={item.URL_thumbnail}
            title={item.title}
            stars={0}
          />
        ))} */}
      </StyledViewTitle>
    </Content>
  );
};

export default Catalog;
