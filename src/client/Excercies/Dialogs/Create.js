import React, { Component, Fragment } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class Create extends Component {
  state= { open: false };

  handleClose = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
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
          <DialogActions>
            <Button color="primary" variant="contained">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default Create;
