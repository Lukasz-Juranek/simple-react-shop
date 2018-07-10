import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import store from './store'
import {StoreCommands} from './store'
import BasketItemTable from './BasketItemTable'
import BasketBuyConfirmation from './BasketBuyConfirmation'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import classnames from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

function getModalStyle() {
  const top = 55;
  const left = 55;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles1 = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 1,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class BasketModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: this.props.open,
                   expanded:  false };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

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

              <CardHeader
                action={
                  <Button onClick={this.handleClose}> Close </Button>
                }
                title="Koszyk"
                // subheader=" cos tu jeszcze bedzie"
              />
              <CardContent>
                <BasketItemTable/>
              </CardContent>
              
              <CardActions className={classes.actions} disableActionSpacing>                           
                <Button
                    className={classnames(classes.expand)}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                > DOSTAWA I PŁATNOŚĆ   
                
                <IconButton  className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}>
                  <ExpandMoreIcon />
                </IconButton>                  
                </Button>
              </CardActions>

              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <BasketBuyConfirmation/>
            </CardContent>
          </Collapse>

          </div>
        </Modal>
      </div>
    );
  }
}

BasketModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles1)(BasketModal);