import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
    const { excercise, category } = this.props;

    return (
      <Grid container>
        <Grid item sm>
          <LeftPanel
            category={category}
            excercise={excercise}
            styles={style}
          />
        </Grid>
        <Grid item sm>
          <RightPanel styles={style} />
        </Grid>
      </Grid>
    );
  }
}

export default Excercies;
