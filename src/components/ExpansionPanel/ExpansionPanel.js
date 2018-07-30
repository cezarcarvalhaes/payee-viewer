import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  column: {
    flexBasis: '25%',
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={
            <Tooltip title = "Details">
                <ExpandMoreIcon />
            </Tooltip>
        }>
          {/* <Typography className={classes.heading}>Expansion Panel 1</Typography> */}
            <div className={classes.column}>
                <Typography >
                    {props.payor}
                </Typography>
            </div>
            <div className={classes.column}>
                <Typography>
                    {props.id}
                </Typography>
            </div>
            <div className={classes.column}>
                <Typography>
                    {props.invoice}
                </Typography>
            </div>
            <div className={classes.column}>
                <Typography>
                    {props.amount}
                </Typography>
            </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Typography>
                {props.description}
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);