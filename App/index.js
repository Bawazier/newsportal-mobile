import React, {Component} from 'react';
import {Container} from 'native-base';
import {Provider} from 'react-redux';
import Screens from './navigations';
import store from './redux/store';
import SplashScreen from 'react-native-splash-screen';

export class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Screens />
        </Container>
      </Provider>
    );
  }
}

export default App;
