import React from 'react';
import Spinner from './spinner.gif'

const Preloader = () => {
    return (
        <div>
            <img src={Spinner} style={{margin: 'auto', display: 'block'}} alt=""/>
        </div>
    )
}

export default Preloader
