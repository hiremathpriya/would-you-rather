import React from 'react'

// this will be the gameplay component


class Play extends React.Component {



render(){
    return (
        <div>
            <div className="container">
        <div className="row">
            <h3 id="title"><b>Would you rather..?</b></h3>
        </div>
            <div className="row">
                <div className="six columns">
                    <div id="card1" className="card">
                        <div id="holder1" className="holder">
                            <h4 id="question1"><b>Eat a banana?</b></h4> 
                        </div>
                    </div>
                </div>
                <div className="six columns">
                    <div id="card2" className="card">
                        <div className="holder">
                            <h4 id="question2"><b>Eat an apple?</b></h4> 
                        </div>
                    </div>
                </div>
            </div>            
                <div className="row">
                        <div id="card3" className="card2">
                            <div className="holder">
                                <h4 id=""><b>Return to landing page</b></h4> 
                            </div>
                        </div>
                    </div>
        
    </div>
        </div>
    )
}

}

export default Play