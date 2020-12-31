import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Content} from 'native-base';

import CardDetails from '../../components/CardDetails';
import {APP_URL} from '@env';

const Details = () => {
  return (
    <Content>
      {/* {detailsNews.data.map((item) => (
        <CardDetails
          thumbnail={APP_URL + item.User.photo}
          userName={item.User.name}
          createdAt={item.createdAt}
          urlImage={item.URL_thumbnail}
          title={item.title}
          story={item.story}
          login={login.token}
          love={stars}
          onPressLove={pressLove}
        />
      ))} */}
    </Content>
  );
};

export default Details;
