import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import style from './Footer.style';

class Footer extends Component {
  state={}

  render() {
    const {
      classes, category, muscles, onSelect,
    } = this.props;


    const index = category
      ? muscles.findIndex((group) => group === category) + 1
      : 0;

    const OnChangeIndex = (e, indexes) => {
      onSelect(indexes === 0 ? '' : muscles[indexes - 1]);
    };

    return (
      <Paper className={classes.root}>
        <Tabs
          value={index}
          indicatorColor="primary"
          onChange={OnChangeIndex}
          textColor="primary"
          centered
        >
          <Tab label="All" />
          {muscles.map((categorys) => (
            <Tab label={categorys} />
          ))}
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(style)(Footer);
