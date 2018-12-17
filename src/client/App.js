import React, { Component, Fragment } from 'react';
import { Footer, Header } from './Layout';
import Excercise from './Excercies';

import { muscles, exercises } from './store';

class App extends Component {
  state = {
    exercises,
    category: 'arms',
    exercise: {},
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

  handleExercise=(id) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === id),
    }));
  }

  handleExcerciseCreate=(excercise) => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        excercise,
      ],
    }));
  }

  render() {
    const exercises = this.getCategoryByMuscles();
    const { category, exercise } = this.state;

    return (
      <Fragment>
        <Header
          muscles={muscles}
          ExcericeCreate={this.handleExcerciseCreate}
        />
        <Excercise
          exercises={exercise}
          excercise={exercises}
          category={category}
          onSelect={this.handleExercise}
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
