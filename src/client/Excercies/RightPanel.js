import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Right extends Component {
  state = {}

  render() {
    const { styles } = this.props;
    return (
      <Paper style={styles.Paper}>
        <Typography
          variant="headline"
        >
         Welcome
        </Typography>
        <Typography
          variant="subheading"
          style={{ marginTop: 20 }}
        >
          Please Select the text from the right to enable the sexies
        </Typography>
      </Paper>
    );
  }
}

export default Right;
