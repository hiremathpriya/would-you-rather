import React from 'react'
import Question from './Question'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions'

class Play extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchQuestions())
    }

    render() {
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
                                    <h4 id="question1"><b><Question option={this.props.questions.Option1} numberofclicks={this.props.questions.counter1  } totalnumberofclicks={this.props.questions.counter1 +  this.props.questions.counter2}/></b></h4>
                                </div>
                            </div>
                        </div>
                        <div className="six columns">
                            <div id="card2" className="card">
                                <div className="holder">
                                    <h4 id="question2"><b><Question option={this.props.questions.Option2} numberofclicks={this.props.questions.counter2 } totalnumberofclicks={this.props.questions.counter1 +  this.props.questions.counter2}/></b></h4>
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

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(Play)
