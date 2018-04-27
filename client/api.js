import request from 'superagent'

const Url = '/api/v1'

export function getQuestionsApi (callback) {
    request
        .get(Url)
        .end((err, res) => {
            callback(err, res.body)
        })
}

export function updateQuestionCounterRequest (question) {
    let {id, counter1, counter2} = question
    // counter1++
    // counter2++
    return dispatch => {
        request
            .put('/api/v1/' + id)
            .send({counter1, counter2})
            .then(res => dispatch(updateQuestionCounter(question)))
    }
}
