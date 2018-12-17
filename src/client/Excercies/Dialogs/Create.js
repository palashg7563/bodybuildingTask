import React, { Component, Fragment } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import style from './Create.style';

class Create extends Component {
  state= {
    open: false,
    excercise: {
      title: '',
      description: '',
      muscles: '',
    },
  };

  handleClose = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleChange = (name) => ({ target: { value } }) => {
    const { excercise } = this.state;

    this.setState({
      excercise: {
        ...excercise,
        [name]: value,
      },
    });
  }

  onSubmit = () => {
    const { excercise } = this.state;
    const { onCreate } = this.props;
    onCreate({
      ...excercise,
      id: excercise.title.toUpperCase().replace(/ /g, '-'),
    });

    this.setState({
      open: false,
      excercise: {
        title: '',
        description: '',
        muscles: '',
      },
    });
  }

  render() {
    const { classes, muscles: categories } = this.props;
    const { open, excercise: { title, description, muscles } } = this.state;

    return (
      <Fragment>
        <Fab
          variant="round"
          color="secondary"
          onClick={this.handleClose}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle
            id="form-dialog-title"
          >
            Create The Excercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill the Form
            </DialogContentText>
          </DialogContent>
          <form>
            <TextField
              label="Title"
              className={classes.formControl}
              value={title}
              onChange={this.handleChange('title')}
              margin="normal"
            />
            <br />
            <TextField
              label="Description"
              multiline
              rows={4}
              className={classes.formControl}
              value={description}
              onChange={this.handleChange('description')}
              margin="normal"
            />
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="muscles">Muscles</InputLabel>
              <Select
                native
                value={muscles}
                onChange={this.handleChange('muscles')}
              >
                <option value="">{null}</option>
                {categories.map((category) => (
                  <option key={categories} value={category}>{category}</option>
                ))}
              </Select>
            </FormControl>
          </form>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              onClick={this.onSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(style)(Create);
