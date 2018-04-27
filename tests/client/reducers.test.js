

const formReducer = require('../../client/reducers/formReducers')

test('Reducer initial state', () => {
  const initialState =false
       
  const expected = true
    
   
  const action = {
    type: 'SUBMITTED'
    
  }

  const actual = formReducer(initialState, action)

  expect(actual).toEqual(expected)
  
})

