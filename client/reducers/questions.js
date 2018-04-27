import {RECEIVE_QUESTIONS} from '../actions'
import {UPDATE_COUNTERS} from '../actions'

function questions (state = {}, action){
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return action.questions
        case UPDATE_COUNTERS: 
            const newState = {
                ...state,
                counter1: action.counter1,
                counter2: action.counter2
            }
            return newState
        
            default: 
            return state
    }
}

export default questions