import PropTypes from 'prop-types';
import React, { Component }  from 'react';

const Button = ({color, text, onClick}) => {
    return <button onClick = {onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
}

Button.defaultProps = {
    color: 'black',
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
