import PropTypes from 'prop-types';
import Button from './Button'
import React, { Component }  from 'react';

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/* <Button color = 'green' text = 'Hello'/>
            <Button color = 'red' text = 'Hello 1'/>
            <Button color = 'blue' text = 'Hello 3'/> */}
            <Button text = {showAdd ? 'Full Schedule': 'Create a meeting'} onClick = {onAdd}/>
        </header>      
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

//<h1 style = {headingStyle}>{title}</h1> //line 6 change style

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }
export default Header
