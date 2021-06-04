import React from 'react';
import './App.css';
import VirtualMachine from './components/VirtualMachine';
const axios = require("axios");

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      virtualMachines: [],
      time: Date.now()
    };
    this.getApiData = this.getApiData.bind(this);
  }

  getApiData() {
    const apiURL = "http://localhost/php_test/";

    axios.get(apiURL).then((resp) => {
      this.setState({ virtualMachines: resp.data});
     console.log(resp.data);
    });
  }

  componentDidMount() {
    //rerender component every minute (60000 ms)
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 60000);
    this.getApiData();
  }

  render() {
    return (
      <div className="App">
        <h1>Virtual Machines</h1>
        <h2>Updated data every minute</h2>
        <div>
          <br />
        </div>
        <div className="virtualMachines">
          <VirtualMachine vm={this.state.virtualMachines} />    
       </div>
      </div>
    );
  }
}


export default App;
