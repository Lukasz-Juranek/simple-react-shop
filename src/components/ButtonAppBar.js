import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import BasketModal from './BasketModal';
import store from './store'
import {StoreCommands} from './store'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: store.getState().active_view};
  }

  handleOpenBasket = () => {
    this.setState({ open: true });
    store.dispatch({type: StoreCommands.BASKET_VISIBILITY, payload: true});        
  };

  render() {
  const { classes } = this.props; 

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Sklepik Martusi
          </Typography>
          <BasketModal open={this.state.open}> </BasketModal>
            <Button onClick={this.handleOpenBasket} color="inherit">Koszyk                
              <IconButton color="inherit">
                <Badge badgeContent={10} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);