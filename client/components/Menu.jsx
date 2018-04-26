import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {

    return(
        <div>
            <Link to={'/submit'}><h1>Submit</h1></Link>
            <Link to={'/play'}>Play</Link>
        </div>
    )


}

export default Menu