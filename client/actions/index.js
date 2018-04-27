import request from 'superagent'


export function recievedQuestions(){
    return {
    type:'SUBMITTED'
  }
}

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
export const UPDATE_COUNTERS = 'UPDATE_COUNTERS'

export const requestQuestions = () => {
  return {
    type: REQUEST_QUESTIONS
  }
}

export const receiveQuestions = (questions) => {
  let index = Math.floor(Math.random() * questions.length-1)
  
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions[index]
  }
}// Edit cats action???


export function postQuestions (questions) {
  console.log('posting')
      return (dispatch) => 
        request
        .post('/api/v1')
        .send(questions)
        .then(res => {
          console.log(res)
          dispatch(recievedQuestions(res.body))
        })
        .catch(err => {
          dispatch(showError(err.message))
        })
    }
  

export const updateQuestionCounter = (question, newCount1, newCount2) => {
  return {
    type: UPDATE_COUNTERS,
    counter1: question.counter1 + newCount1, 
    counter2: question.counter2 + newCount2
    }
}

// the below is the equivalent of our api get request. this is not an action, but calls upon actions to get the data.
export function fetchQuestions () {
  return (dispatch) => {
    dispatch(requestQuestions())
    return request
      .get('/api/v1')
      .then(res => {
        dispatch(receiveQuestions(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function updateQuestionCounterRequest (question, newCount1, newCount2) {
  let {id, counter1, counter2} = question
  return dispatch => {
      request
          .put('/api/v1/' + id)
          .send({counter1, counter2})
          .then(res => dispatch(updateQuestionCounter(question, newCount1, newCount2)))
  }
}

