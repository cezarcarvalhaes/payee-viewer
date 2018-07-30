import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
  },
  column: {
    flexBasis: '25%',
  },
});

const PanelHeader = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary>
            <div className={classes.column}>
                <Typography variant = "button">
                    Payor Name
                </Typography>
            </div>
            <div className={classes.column}>
                <Typography variant = "button">
                    Payor ID
                </Typography>
            </div>
            <div className={classes.column}>
                <Typography variant = "button">
                    Invoice No.
                </Typography>
            </div>
            <div className={classes.column}>
                <Typography variant = "button">
                    Amount
                </Typography>
            </div>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
  );
}

PanelHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelHeader);