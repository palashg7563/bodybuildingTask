import React, { Component, Fragment } from 'react';
import { Footer, Header } from './Layout';
import Excercise from './Excercies';

import { muscles, exercises } from './store';

class App extends Component {
  state = {
    exercises,
    category: 'arms',
  };

  getCategoryByMuscles() {
    /* eslint-disable */
    return Object.entries(
        this.state.exercises.reduce((excercises, excercise) => {
        const { muscles } = excercise;

        excercises[muscles] = excercises[muscles]
          ? [...excercises[muscles], excercise]
          : [excercise]

        return excercises;
      }, {})
    )
    /* eslint-enable */
  }

  handleCategory = (category) => {
    this.setState({
      category,
    });
  }

  render() {
    const exercise = this.getCategoryByMuscles();
    const { category } = this.state;

    return (
      <Fragment>
        <Header />
        <Excercise
          excercise={exercise}
          category={category}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategory}
        />
      </Fragment>
    );
  }
}

export default App;
