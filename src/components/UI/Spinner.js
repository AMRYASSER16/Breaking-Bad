import React from 'react';
import spinner from '../../imgs/spinner.gif'

const Spinner = () => {
    return <div style={{ textAlign: 'center' }}>
        <img src={spinner} alt='Spinner' />
    </div>;
}

export default Spinner;