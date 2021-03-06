import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto',
  },
};

class Excercies extends Component {
  state = {

  }

  render() {
    const {
      excercise,
      category,
      onSelect,
      exercises,
      onDelete,
      onEdit,
      editMode,
    } = this.props;

    return (
      <Grid container>
        <Grid item sm>
          <LeftPanel
            category={category}
            onEdit={onEdit}
            excercise={excercise}
            styles={style}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        </Grid>
        <Grid item sm>
          <RightPanel
            styles={style}
            editMode={editMode}
            exercises={exercises}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Excercies;
