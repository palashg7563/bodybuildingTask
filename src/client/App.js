import React, { Component, Fragment } from 'react';
import { Footer, Header } from './Layout';
import Excercise from './Excercies';

class App extends Component {
  state = { };

  render() {
    return (
      <Fragment>
        <Header />
        <Excercise />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
