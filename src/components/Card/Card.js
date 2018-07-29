import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Paper } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  card: {
    // width: '218px',
    margin: '5px',
    backgroundSize: 'unset',
    // backgroundColor: '#424242',
    paddingTop: '8px',
    borderRadius:5,
  },
  media: {
    width: '200px',
    // paddingTop: '100%',
    backgroundSize: 'unset',
    marginLeft: '8px',
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
  header: {
    marginBottom: '0px',
    marginTop: '8px',
  },
  streaming: {
    color: "#f2f2f2",
    textAlign: 'center'
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
    const icon = this.props.icon;

    return (
      <div>
        <Paper className={classes.card}>
        <CardHeader title={this.props.name} subheader={this.props.subdate} />
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
          <Typography variant="body1" className={classes.primaryText}>
                {this.props.address1}
              </Typography>
              <Typography variant="body1" className={classes.primaryText}>
                {this.props.city}, {this.props.state} {this.props.zip} {this.props.country}
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
              <Typography paragraph variant = "button">
                Payment info:
              </Typography>
              <Typography variant = "body1">
                Card: {this.props.PAN}
              </Typography>
              <Typography variant = "body1">
                CVV: {this.props.CVV} &nbsp;&nbsp;|&nbsp;&nbsp; Exp. {this.props.exp}
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