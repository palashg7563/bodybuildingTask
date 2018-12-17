import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Left extends Component {
  state = {}

  render() {
    const {
      styles,
      excercise,
      category,
      onSelect,
      onDelete,
    } = this.props;


    return (
      <Paper style={styles.Paper}>
        {excercise.map(([group, categorys]) => (!category || category === group
          ? (
            <Fragment key={group}>
              <Typography
                variant="headline"
                style={{ textTransform: 'capitalize' }}
              >
                {group}
              </Typography>
              <List component="ul">
                {categorys.map(({ id, title }) => (
                  <ListItem
                    key={id}
                    button
                    onClick={() => onSelect(id)}
                  >
                    <ListItemText
                      primary={title}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        onClick={() => onDelete(id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
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
