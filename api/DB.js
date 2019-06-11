module.exports = {
  // DB: 'mongodb://vegners:vegners1234@ds121301.mlab.com:21301/reactcrud'
  DB: `mongodb://${ process.env.DB_USER }:${ process.env.DB_PASS }@ds121301.mlab.com:21301/reactcrud`
  // DB: 'mongodb://localhost:27017/reactcrud'
}