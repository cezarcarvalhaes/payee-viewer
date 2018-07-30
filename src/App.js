import React, { Component } from 'react';
import Header from './components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from './components/Card';
import SimpleModal from './components/Modal';
import Button from '@material-ui/core/Button';
import SortByAlpha from '@material-ui/icons/SortByAlpha';
import Icon from '@material-ui/core/Icon';
import SearchBar from './components/SearchBar';
import data from './sample.json';
import './App.css';

const toolsStyle = {
  float: 'right',
  marginRight: '2em',
}

class App extends Component {

state = {
  data,
  open: false,
  payorData: [],
  payeeName: "",
  sort: false,
  search: "",
};

//sorts data once component mounts
componentDidMount() {
  this.toggleSort();
};

//Sorts data by payee name either ascending or descending
toggleSort = () => {
  if (this.state.sort === false){
    data.sort((a, b) => {
      if (a.Payee.Name < b.Payee.Name) return -1;
      if (a.Payee.Name > b.Payee.Name) return 1;
      return 0
    })
    this.setState({sort: true});
  }
  else {
    data.sort((a, b) => {
      if (a.Payee.Name > b.Payee.Name) return -1;
      if (a.Payee.Name < b.Payee.Name) return 1;
      return 0
    })
    this.setState({sort: false});
  }
  this.setState({data})
}

populateModal = (index) => {
  this.setState({payorData: data[index], payeeName:data[index].Payee.Name}, 
    () => this.handleOpen())
}

//opens modal
handleOpen = () => {
  this.setState({ open: true });
};
//closes modal
handleClose = () => {
  this.setState({ open: false });
};

handleInputChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: value.trim().toUpperCase()
  });
}

  render() {
    const search = this.state.search;
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
        <SearchBar onChange = {this.handleInputChange}/>
        <div id = "tools" style = {toolsStyle}>
          <Button variant="fab" aria-label="Sort" align = "right" onClick={this.toggleSort}>
            <SortByAlpha />
          </Button>
        </div>
        <Grid container spacing={8} style={{padding: 8}}>
          {this.state.data
          .filter( (data) => data.Payee.Name.startsWith(search))
          .map( (data, index)=> (
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
