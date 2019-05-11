import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Presupuesto extends Component{
    render(){
        return(
            <div className='alert alert-primary'>
                Presupuesto: $<span>{this.props.presupuesto}</span>
            </div>
        )
    }
}

Presupuesto.propTypes = {
    presupuesto : PropTypes.string.isRequired
}

export default Presupuesto;