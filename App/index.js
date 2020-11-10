import React, {Component} from 'react';
import {Container, Header} from 'native-base';
// import Main from './screens/Main';
import Topics from './screens/Topics';

export class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        {/* <Main /> */}
        <Topics />
      </Container>
    );
  }
}

export default App;
