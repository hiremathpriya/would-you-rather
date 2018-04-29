import {combineReducers} from 'redux'
import submit from './formReducers'
import questions from './questions'
//import reducers here

export default combineReducers({
  submit,
    questions  
})
