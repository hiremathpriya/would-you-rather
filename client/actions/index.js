import request from 'superagent'


export function recievedQuestions(){
    return {
    type:'SUBMITTED'
  }
}


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
  



// export const SHOW_ERROR = 'SHOW_ERROR'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const REQUEST_POSTS = 'REQUEST_POSTS'


// export const receivePosts = (posts) => {
//   return {
//     type: RECEIVE_POSTS,
//     posts: posts.map(post => post.data)
//   }
// }

// export const showError = (errorMessage) => {
//   return {
//     type: SHOW_ERROR,
//     errorMessage: errorMessage
//   }
// }
