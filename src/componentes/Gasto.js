import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
    render(){
        const {cantidadGasto,nombreGasto} = this.props.gasto;
        // console.log(cantidadGasto);
        // console.log(nombreGasto);
        return(
            <li className="gastos">
                <p>
                    {nombreGasto}
                    <span className="gasto">$ {cantidadGasto} </span>
                </p>
            </li>
        )
    }
}

Gasto.protoTypes = {
    gasto : PropTypes.object.isRequiered
}

export default Gasto;