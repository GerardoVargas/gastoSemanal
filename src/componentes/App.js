import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import FormularioGasto from './Formulario';
import Listado from './Listado';

class App extends Component {

  state = {
    presupuesto : '',
    restante : '',
    gastos:{}
  }

  //AGREGANDO UN NUEVO GASTO
   agregarGasto = gasto =>{
    //tomar una copia del state actual
    const gastos = {...this.state.gastos};
    // console.log('Se agrego el gasto' + gasto);
    // console.log(gastos); 

    //agregar el gasto al objeto del state
    gastos[`gastos${Date.now()}`] = gasto;

    //ponerle el state
    this.setState({
      //PUEDE SER ASI
      //gastos: gastos

      //o colocar mejor de esta manera ya que es el mismo nombre
      gastos

    })
  }

  render() {
    return(
      <div className='App container'>
        <Header
        
        titulo = 'Gastos Semanal'
        />
        <div className='contenido-principal contenido'>
          <div className='row'>
            <div className='one-half column'>
              <FormularioGasto
                agregarGasto = {this.agregarGasto}
              
              />
            </div>
            <div className='one-half column'>
              <Listado 
              
              gastos = {this.state.gastos}
              
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
