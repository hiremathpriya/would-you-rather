import React from 'react'
import Question from './Question'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchQuestions, updateQuestionCounterRequest } from '../actions'



class Play extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            newCount1: 0,
            newCount2: 0,
            isShowingPercentage: false
        }
        this.refreshQuestions = this.refreshQuestions.bind(this)
        this.addToCountOne = this.addToCountOne.bind(this)
        this.addToCountTwo = this.addToCountTwo.bind(this)
    }

    componentDidMount() {
        this.refreshQuestions()
    }

    refreshQuestions() {
        this.props.dispatch(fetchQuestions())
        this.setState({
            newCount1: 0,
            newCount2: 0,
            isShowingPercentage: false
        })

    }


    addToCountOne() {
        this.setState(({newCount1}) => ({newCount1: newCount1 + 1, isShowingPercentage: true}) )
        this.props.dispatch(updateQuestionCounterRequest(this.props.questions, 1, 0))

    }



    addToCountTwo() {
        this.setState(({newCount2}) => ({newCount2: newCount2 + 1, isShowingPercentage: true}))
        this.props.dispatch(updateQuestionCounterRequest(this.props.questions, 0, 1))

    }

    render() {
        console.log(this.state, this.props)
        console.log(this.state.newCount1, this.state.newCount2)
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h3 id="title"><b>Would you rather..?</b></h3>
                    </div>
                    <div className="row">
                        <div className="six columns">
                            <div id="card1" className="card" onClick={this.addToCountOne}>
                                <div id="holder1" className="holder">
                                    <h4 id="question1"><b><Question isShowingPercentage={this.state.isShowingPercentage} question={this.props.questions} option={this.props.questions.Option1} numberofclicks={this.props.questions.counter1  } totalnumberofclicks={this.props.questions.counter1 +  this.props.questions.counter2}/></b></h4>
                                </div>
                            </div>
                        </div>
                        <div className="six columns">
                            <div id="card2" className="card" onClick={this.addToCountTwo}>
                                <div className="holder">
                                    <h4 id="question2"><b><Question isShowingPercentage={this.state.isShowingPercentage} question={this.props.questions} option={this.props.questions.Option2} numberofclicks={this.props.questions.counter2 } totalnumberofclicks={this.props.questions.counter1 +  this.props.questions.counter2}/></b></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div id="card3" className="card2">
                            <div className="holder">
                                <h4 onClick={this.refreshQuestions}><b>Next</b></h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div id="card4" className="card2">
                            <div className="holder">
                                <Link to={'/'}><h4 id=""><b>Return to start</b></h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(Play)
