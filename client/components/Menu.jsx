import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {

    return(
        <div>
            <Link to={'/submit'}>Submit</Link>
            <Link to={'/play'}>Play</Link>
        </div>
    )


}

export default Menu