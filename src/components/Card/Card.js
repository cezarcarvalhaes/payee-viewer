import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Paper } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';

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
    const icon = this.props.icon;

    return (
      <div>
        <Paper className={classes.card}>
        <CardHeader 
        title={this.props.name} 
        subheader={this.props.subdate}             
        action={
              <Tooltip title = "View Remittances">
                <IconButton onClick = {this.props.toggleModal}>
                  <MoreVertIcon />
                </IconButton>
              </Tooltip>
            }
            />
        <CardContent>
          <Typography variant="body1">
            Contact: {this.props.contact}
          </Typography>
          <Typography variant="body1">
            Phone: {this.props.phone}
          </Typography>
          <Typography variant="body1">
            Fax: {this.props.fax}
          </Typography>
          <br></br>
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
                CVV: {this.props.CVV} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Exp. {this.props.exp}
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