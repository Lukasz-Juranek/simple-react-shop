import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShopItemCard from './ShopItemCard';

const styles1 = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 5,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 3,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={18}>
        <Grid item xs>
            <ShopItemCard> </ShopItemCard>
        </Grid>
        <Grid item xs>
            <ShopItemCard> </ShopItemCard>
        </Grid>
        <Grid item xs>
            <ShopItemCard> </ShopItemCard>
        </Grid>
        <Grid item xs>
            <ShopItemCard> </ShopItemCard>
        </Grid>
        <Grid item xs>
            <ShopItemCard> </ShopItemCard>
        </Grid>
       </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles1)(FullWidthGrid);