import React, { Component } from 'react';
import { revisarPresupuesto } from "../helpers";
import PropTypes from 'prop-types';

class Restante extends Component{
    render(){

        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;

        return(
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $<span>{this.props.restante}</span>
            </div>
        )
    }
}

Restante.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}

export default Restante;