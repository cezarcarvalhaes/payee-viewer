import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import PanelHeader from '../PanelHeader';


const styles = theme => ({
  paper: {
    width: '70%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
  },
});

class SimpleModal extends React.Component {

  render() {
    const { classes } = this.props;
    const payorData = this.props.payorData;
    return (
        <Modal
          aria-labelledby="Payee Remittances"
          aria-describedby="This table provides remittance information for the selected payee"
          open={this.props.open}
          onClose={this.props.onClose}
        >
          <div className={classes.paper}>
            <Typography variant="title" align="center" gutterBottom>
                {this.props.payeeName} REMITTANCES
            </Typography>

            <PanelHeader/>
            {/* maps through remittance array to populate expansion panels */}
            {payorData.map((data) => (
                <ExpansionPanel
                    payor={data.PayorName}
                    id = {data.PayorId}
                    invoice = {data.InvoiceNo}
                    amount = {data.Amount}
                    description = {data.Description}
                />)
            )}        
            <SimpleModalWrapped />
          </div>
        </Modal>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

SimpleModal.defaultProps = {
    payorData: []
  };

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;