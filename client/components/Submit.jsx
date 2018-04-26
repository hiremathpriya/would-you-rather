import React from 'react'

//this will be the submit form

class Submit extends React.Component {

        constructor(props) {
        super(props)
        this.state = {
        
        }
    }

    render(){
        return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <h3 id="title"><b>Would you rather..?</b></h3>
                </div>
                <div className="row">
                    <form>
                        <input className="input" placeholder="Enter option one" type="text"/><br/>
                        <input className="input" placeholder="Enter option two" type="text"/><br/>
                        <input className ="submit" type="submit"/>
                    </form>
                </div>            
                <div id="card3" className="card3">
                    <div className="holder">
                        <h4 id="#"><b>Return to landing page</b></h4> 
                    </div>
                </div>
            </div>
        </React.Fragment>  
        )}
   
}

export default Submit