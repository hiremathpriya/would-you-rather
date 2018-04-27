const initialState = []

function formReducer (state = false, action) {
  switch(action.type) {
    case 'SUBMITTED':
      return true
    default:
      return state
  }
}

module.exports = formReducer