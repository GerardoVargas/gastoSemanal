import React, { Component } from "react";

class FormularioGasto extends Component {
    
    //refs para los campos del formulario
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    
    crearGasto = (e) => {
        //PREVENIR EL DEFAULT
        e.preventDefault();

        //CREAR EL OBJETO
        const gasto = {
            nombreGasto : this.nombreGasto.current.value,
            cantidadGasto : this.cantidadGasto.current.value
        }
        //console.log(gasto);
        //AGREGARLO Y ENVIARLO POR PROPS
        this.props.agregarGasto(gasto);

        //RESETEAR EL FORMULARIO
        e.currentTarget.reset();
    }

    render() {
    return (
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            ref= {this.nombreGasto}
            className="u-full-width"
            type="text"
            placeholder="Ej. Transporte"
          />
        </div>

        <div className="campo">
          <label>Cantidad</label>
          <input ref= {this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
        </div>

        <input
          className="button-primary u-full-width"
          type="submit"
          value="Agregar"
        />
      </form>
    );
  }
}

export default FormularioGasto;
