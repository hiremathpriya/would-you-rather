import {SUBMITTED} from '../actions'

function submit (state = false, action) {
  console.log('hit')
  switch(action.type) {
    case SUBMITTED:
      return true
    default:
      return state
  }
}

export default submit