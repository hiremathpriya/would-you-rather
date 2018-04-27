import request from 'superagent'

const Url = '/api/v1'

export function getQuestionsApi (callback) {
    request
        .get(Url)
        .end((err, res) => {
            callback(err, res.body)
        })
}