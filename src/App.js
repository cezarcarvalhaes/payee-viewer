import React, { Component } from 'react';
import Header from './components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from './components/Card';
import SimpleModal from './components/Modal';
import data from './sample.json';
import './App.css';

class App extends Component {

state = {
  data,
  open: false,
  payorData: [],
  payeeName: "",
};

handleOpen = () => {
  this.setState({ open: true });
};

populateModal = (index) => {
  this.setState({payorData: data[index], payeeName:data[index].Payee.Name}, 
    () => this.handleOpen())
}

handleClose = () => {
  this.setState({ open: false });
};

  render() {
    return (
      <div>
        <CssBaseline/>
        <SimpleModal 
        open={this.state.open} 
        onClose={this.handleClose} 
        payorData={this.state.payorData.Remittance}
        payeeName={this.state.payeeName}
        />
        <Header/>
        <Grid container spacing={8} style={{padding: 8}}>
          {this.state.data.map( (data, index)=> (
             <Grid item xs={12} sm={6} lg={4} xl={3} key = {index}>
                <Card 
                name = {data.Payee.Name} 
                subdate = {data.Payee.SubmissionDate}
                contact = {data.Payee.Attention} 
                phone = {data.Payee.Phone}
                fax = {data.Payee.Fax}
                address1 = {data.Payee.Address.Address1}
                address2 = {data.Payee.Address.Address2}
                city = {data.Payee.Address.City}
                state = {data.Payee.Address.StateOrProvince}
                zip = {data.Payee.Address.PostalCode}
                country = {data.Payee.Address.Country}
                PAN = {data.Payment.PAN}
                CVV = {data.Payment.CVV}
                exp = {data.Payment.Exp}
                toggleModal = {()=>this.populateModal(index)}
                />
             </Grid>
          )
          )}
        </Grid>
      </div>
    );
  }
}

export default App;
