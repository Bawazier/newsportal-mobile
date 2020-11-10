import React, {Component} from 'react';
import {Container, Header} from 'native-base';
import Main from './screens/Main';

export class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main />
      </Container>
    );
  }
}

export default App;
