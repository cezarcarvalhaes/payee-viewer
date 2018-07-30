import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: "50%",
  },
  menu: {
    width: 200,
  },
});




class TextFields extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="on">
        <TextField
          id="search"
          label="Search for Payee"
          type="search"
          name="search"
          className={classes.textField}
          margin="normal"
          onChange={this.props.onChange}
        />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);