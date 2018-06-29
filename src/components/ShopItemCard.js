import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Carousel } from 'react-responsive-carousel';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const styles1 = theme => ({
  card: {
    maxWidth: 400,
    // padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(30deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ShopItemCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                G
              </Avatar>
            }
            // action={
            //   <IconButton>
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="Shrimp and Chorizo Paella"
            // subheader="September 14, 2016"
          />
            <Carousel showStatus={false} showIndicators={false} infiniteLoop={true}>
                <div>
                    <img src="/images/pobrane.jpeg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="/images/pobrane.jpeg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="/images/pobrane.jpeg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
          <CardContent>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent> 
        
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <AddShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

ShopItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles1)(ShopItemCard);