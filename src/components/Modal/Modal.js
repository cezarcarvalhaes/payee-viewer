import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import PanelHeader from '../PanelHeader';
import './Modal.css';

// CSS is imported in order to implement media-queries for responsiveness

class SimpleModal extends React.Component {

  render() {
    const payorData = this.props.payorData;
    return (
        <Modal
          aria-labelledby="Payee Remittances"
          aria-describedby="This table provides remittance information for the selected payee"
          open={this.props.open}
          onClose={this.props.onClose}
        >
          <div className="modal">
            <Typography variant="title" align="center" gutterBottom>
                {this.props.payeeName} INVOICES
            </Typography>

            <PanelHeader/>
            {/* maps through remittance array to populate expansion panels */}
            {payorData.map((data) => (
                <ExpansionPanel
                    key = {data.PayorId}
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

//Sets default prop values since setState can leave values 'undefined' while component updates in HOC.
SimpleModal.defaultProps = {
    open: false,
    payorData: []
  };

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = (SimpleModal);

export default SimpleModalWrapped;