import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {

    return(
        <div>
            <Link to={'/submit'}><h1>Submit</h1></Link>
            <Link to={'/play'}>Play</Link>
            <div className="container">
        <div className="row">
            <h3 id="title"><b>Would you rather..?</b></h3>
        </div>
            <div className="row">
                <div className="six columns">
                    <div id="card1" className="card">
                        <div id="holder1" className="holder">
                            <h4 id="question1"><b>Submit a question</b></h4> 
                        </div>
                    </div>
                </div>
                <div className="six columns">
                    <div id="card2" className="card">
                        <div className="holder">
                            <h4 id="question2"><b>Play!</b></h4> 
                        </div>
                    </div>
                </div>
            </div>            
             
        
    </div>
        </div>
    )


}

export default Menu