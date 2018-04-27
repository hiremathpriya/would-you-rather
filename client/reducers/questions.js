import {RECEIVE_QUESTIONS} from '../actions'
import {UPDATE_COUNTERS} from '../actions'

function questions (state = {}, action){
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return action.questions
        case UPDATE_COUNTERS: 
            return action.counter1,
                action.counter2
        
            default: 
            return state
    }
}

export default questions