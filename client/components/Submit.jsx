import React from 'react'
import {Link} from 'react-router-dom'
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
        this.setState({
            [e.target.name] : e.target.value,
            recieved:false

        })
        
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.dispatch(postQuestions(this.state))
    }

    alertUser(){
        console.log('hi')
        return  (state.recieved ==true)
    }

    render(){
        console.log(this.props)
        return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <h3 id="title"><b>Would you rather..?</b></h3>
                </div>
                <div className="row">
                    <form onSubmit={this.handleSubmit} method='post'>
                        <input className="input" name="option1" onChange={this.handleChange} placeholder="Enter option one" type="text"/><br/>
                        <input className="input" name="option2" onChange={this.handleChange} placeholder="Enter option two" type="text"/><br/>
                        <input className ="submit" type="submit"/>
                    </form>
                </div>            
                <div id="card3" className="card3">
                    <div className="holder">
                        <Link to='/'><h4><b>Return to start</b></h4></Link> 
                    </div>
                </div>
                {this.props.recieved && <div>{window.alert('Great! Your quetsion has been successfully submitted')}{window.location.reload()}</div>}
            </div>
        </React.Fragment>  
        )}
   
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        recieved: state.submit
    }
}

export default connect(mapStateToProps)(Submit)
