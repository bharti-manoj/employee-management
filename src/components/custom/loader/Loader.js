import React from 'react'
import loader from '../../../assets/images/loader.gif'

import './Loader.css'

function Loader() {
    return (
        <div className="loader">
            <img src={loader} alt="Loading..." />
        </div>
    )
}

export default Loader
