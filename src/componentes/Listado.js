import React, { Component } from 'react';
import Gasto from './Gasto'; 
import PropTypes from 'prop-types';

class Listado extends Component {
    render(){
        return (
            <div className='gastos-realizados'>
                <h2>Listado</h2>
                {Object.keys(this.props.gastos).map(key => (
                    //para comunicar este objeto gasto con el objeto
                    //del componente gasto, se hace un prop nuevo
                    <Gasto 
                        key={key}
                        gasto = {this.props.gastos[key]}
                    />
                ))}
                
            </div>

        )
    }
}

Gasto.protoTypes = {
    gasto : PropTypes.object.isRequiered
}

export default Listado;