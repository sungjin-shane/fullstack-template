import request from 'superagent'

export function getAllCountries () {
  return request
    .get('/v1/worldcup')
    .then(res => {
      return res.body
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
