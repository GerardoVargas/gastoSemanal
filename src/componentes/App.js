import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import FormularioGasto from "./Formulario";
import Listado from "./Listado";
import ControlPresupuestos from "./ControlPresupuesto";
import { validarPresupuesto } from "../helpers";

class App extends Component {
  constructor() {
    super()
  state = {
    presupuesto: "",
    restante: "",
    gastos: {}
  };
  }
  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt("¿Cual es tu presupuesto?");

    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      });
    } else {
      this.obtenerPresupuesto();
    }
  };

  //AGREGANDO UN NUEVO GASTO
  agregarGasto = gasto => {
    //tomar una copia del state actual
    const gastos = { ...this.state.gastos };
    // console.log('Se agrego el gasto' + gasto);
    // console.log(gastos);

    //agregar el gasto al objeto del state
    gastos[`gastos${Date.now()}`] = gasto;

    //restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);

    //ponerle el state
    this.setState({
      //PUEDE SER ASI
      //gastos: gastos

      //o colocar mejor de esta manera ya que es el mismo nombre
      gastos
    });
  };

  //RESTAR DEL PRESUPUESTO CUANDO UN GASTO SE CREA
  restarPresupuesto = cantidad => {
    //leer el gasto
    let restar = Number(cantidad);

    //tomar una copia del state actual
    let restante = this.state.restante;

    //lo restamos
    restante -= restar;

    restante = String(restante);

    //agregamos el nuevo state
    this.setState({ restante });
  };

  render() {
    return (
      <div className="App container">
        <Header titulo="Gasto Semanal" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <FormularioGasto agregarGasto={this.agregarGasto} />
            </div>
            <div className="one-half column">
              <Listado gastos={this.state.gastos} />

              <ControlPresupuestos
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
