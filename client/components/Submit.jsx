import React from 'react'
import {connect} from 'react-redux'
import {postQuestions} from '../actions/index'

//this will be the submit form

class Submit extends React.Component {

        constructor(props) {
        super(props)
        this.state = {
            option1 :'',
            option2:''
        
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(e){
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }

    handleSubmit(e){
        console.log(this.state)
        e.preventDefault()
        this.props.dispatch(postQuestions(this.state))
    }

    render(){
        return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <h3 id="title"><b>Would you rather..?</b></h3>
                </div>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <input className="input" name="option1" onChange={this.handleChange} placeholder="Enter option one" type="text"/><br/>
                        <input className="input" name="option2" onChange={this.handleChange} placeholder="Enter option two" type="text"/><br/>
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

export default connect()(Submit)