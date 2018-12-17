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
    const initalState = muscles.reduce((excercise, category) => ({
      ...excercise,
      [category]: [],
    }), {});
    /* eslint-disable */
    return Object.entries(
        this.state.exercises.reduce((excercises, excercise) => {
        const { muscles } = excercise;

        excercises[muscles] = [...excercises[muscles], excercise]
        return excercises;
        }, initalState)
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

  handleExcerciseDelete=(id) => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter((docs) => docs.id !== id),
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
          onDelete={this.handleExcerciseDelete}
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
