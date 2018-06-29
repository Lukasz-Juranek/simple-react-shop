import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import store from './store'
import {StoreCommands} from './store'
import BasketItemTable from './BasketItemTable'


import Button from '@material-ui/core/Button'



function getModalStyle() {
  const top = 55;
  const left = 55;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class BasketModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: this.props.open };
  }

  componentWillMount()
  {
    this.unsubscribe = store.subscribe(() => {
      // localStorage.setItem('reduxState', JSON.stringify(store.getState()));
      this.setState(
        {
          open: store.getState().active_view
        });
    }).bind(this);
  }


  handleOpenBasket = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    store.dispatch({type: StoreCommands.BASKET_VISIBILITY, payload: false});
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <BasketItemTable/>
            <Button onClick={this.handleClose}> Close </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

BasketModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasketModal);