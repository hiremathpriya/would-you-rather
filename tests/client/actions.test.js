
import * as actions from '../../client/actions/index'


test('recievedQuestion updated to database has been recived', () => {
  //Arrange
  const expected = {
    type:'SUBMITTED'
  } 
  const actual = actions.recievedQuestions()
  expect(actual).toEqual(expected)
})


test('postQuestions', () => {

})


