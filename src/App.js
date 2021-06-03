import React from 'react';
import './App.css';
import VirtualMachine from './components/VirtualMachine';
const axios = require("axios");

// 1. coger data del api que he creado a partir del PHP
// 2. ponerlo en una funcion que se llama al onclick el botón 
// 3. guardar data en el estado en un array apis []
// 4. mapear sobre los resultados 
// 5. imprimir componente <VirtualMachine/>
// 6. Dentro de cada componente imprimir sus datos
// 7. ver cómo imprimir los gráficos
// 8. set a timer to refresh every minute
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
      this.setState({ virtualMachines: resp.data });
     // console.log(resp.data);
    });

    /*axios.get(apiURL ,{
      params: {
        maxResults: 1
      }
    })
    .then((resp) => {
      this.setState({
        virtualMachines: resp.data
      });
    })*/
  }

  componentDidMount() {
    //rerender component every minute (60000 ms)
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 60000);
    this.getApiData();
    //console.log(this.state.virtualMachines);
  }

  /*componentWillUnmount() {
    clearInterval(this.interval);
  }*/

  render() {
    return (
      <div className="App">
        <h1>Virtual Machines</h1>
        <h2>Updated data every minute</h2>
        {/* Fetch data from API */}
        <div>
          <br />
        </div>
        {/* Display data from API */}
      <div className="virtualMachines">
      <VirtualMachine vm={this.state.virtualMachines} />  
      {/*   {this.state.virtualMachines.map((vm, index) => (
          <div className="virtualMachine" key={index} > 
          <VirtualMachine vm={vm} />  
          </div>
        ))} */}
       </div>
      </div>
    );
  }
}


export default App;
