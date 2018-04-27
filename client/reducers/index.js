import {combineReducers} from 'redux'
import {formReducer} from './formReducers'
import questions from './questions'
//import reducers here

export default combineReducers({
  formReducer,
    questions  
})
