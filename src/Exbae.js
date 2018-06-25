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

const styles = theme => ({
  card: {
    maxWidth: 350,
  },
  
  media: {
    height: 0,
    // width: 560
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
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Exbae extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader className={classes.header}
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                N
              </Avatar>
            }
            title="Exbae"
            subheader="Node & MySQL"
          />
          <CardContent>
            <Typography component="p">
              Exbae - Sell and Buy stuff from broken relationships!
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
           
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                About the App:
              </Typography>
              <Typography paragraph>
                Exbae was created with MySQL, Node, and Inquirer. 
              </Typography>
              <Typography paragraph>
                Use Node to run the exbaecustomer.js and exbaemanager.js. The app will take in orders
                from the customers and deplete the stock from the store's inventory.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Exbae.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Exbae);
