import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class Left extends Component {
  state = {}

  render() {
    const { styles, excercise, category } = this.props;

    return (
      <Paper style={styles.Paper}>
        {excercise.map(([group, categorys]) => (!category || category === group
          ? (
            <Fragment>
              <Typography
                variant="headline"
                style={{ textTransform: 'capitalize' }}
              >
                {group}
              </Typography>
              <List component="ul">
                {categorys.map(({ title }) => (
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null))}
      </Paper>
    );
  }
}

export default Left;