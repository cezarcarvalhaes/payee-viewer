import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Paper } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Details from '@material-ui/icons/Details';
import Tooltip from '@material-ui/core/Tooltip';
import AlertIcon from '../AlertIcon/AlertIcon';
import Person from '@material-ui/icons/Person';
import Phone from '@material-ui/icons/Phone';
import Scanner from '@material-ui/icons/Scanner';
import Business from '@material-ui/icons/Business';
import moment from 'moment';

const styles = theme => ({
  card: {
    margin: '5px',
    backgroundSize: 'unset',
    paddingTop: '8px',
    borderRadius:5,
  },
  actions: {
    display: 'flex',
    padding: '0',
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
  primaryText: {
    color: '#444444',
  },
  danger: {
    color: 'red',
    fontWeight: 'bold'
  },
  icon: {
    verticalAlign: 'middle',
  }
});

class Card extends React.Component {
  state = { 
    expanded: false,
    favOpen: false,
    modalOpen: false,
  };

  handleModalClick = () => {
    this.setState(state => ({ modalOpen: !state.modalOpen }));
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    //Boolean to conditionally render alerts for when a credit card is expired
    const exp = () => {
      if (moment(this.props.subdate, "M-YYYY") > moment().add(1, "months")) {
        return true
      }
      else {
        return false
      }
      };

    return (
      <div>
        <Paper className={classes.card}>
        <CardHeader 
          avatar = {exp ? <AlertIcon/> : ""}
          title={this.props.name}
          subheader={this.props.subdate}             
          action={
                <Tooltip title = "View Remittances">
                  <IconButton onClick = {this.props.toggleModal}>
                    <Details />
                  </IconButton>
                </Tooltip>
              }
        />
        <CardContent>
          <Typography variant="body1">
            <Person className={classes.icon} color="primary"/> Contact: {this.props.contact}
          </Typography>
          <Typography variant="body1">
            <Phone className={classes.icon} color="primary"/> Phone: {this.props.phone}
          </Typography>
          <Typography variant="body1">
            <Scanner className={classes.icon} color="primary"/> Fax: {this.props.fax}
          </Typography>
          <br/>
          <Business className={classes.icon}/>
          <Typography variant="body1">
                {this.props.address1}
          </Typography>
          <Typography variant="body1">
                {this.props.city}, {this.props.state} {this.props.zip} {this.props.country}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
            <Tooltip title = "View Payment Info">
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
            </Tooltip>
        </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant = "button">
                Payment info:
              </Typography>
              <Typography variant = "body1">
                Card Number: {this.props.PAN}
              </Typography>
              <Typography variant = "body1">
                CVV: {this.props.CVV} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
                <span className={exp ? classes.danger : null}>
                  Exp. {this.props.exp}
                </span>
              </Typography>
            </CardContent>
          </Collapse>
        </Paper>
      </div>
    );
  }
}
 
Card.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(Card);