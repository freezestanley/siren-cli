let root = ''
let login = ''
let test = ''
let otest = ''
if (process.env.NODE_ENV === 'production') {
  root = '//hq-jdt-dev.zhongan.com'
  login = '/jdt-web/wx/configdata.do'
  test = '//offline-news-api.herokuapp.com/stories'
} else {
  root = 'http://127.0.0.1:8099'
  login = '/jdt-web/wx/configdata.do'
  test = '/save'
  otest = '/jdt-web/wx/configdata.do'
}
export const ILOGIN = root + login
export const ITEST = root + test
export const OTEST = root + otest
