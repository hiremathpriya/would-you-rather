import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'

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
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
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
