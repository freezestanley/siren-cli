let root = ''
let login = ''
let test = ''
let crossOrigin = '/cross'
let localOrigin = '/local'
if (process.env.NODE_ENV === 'production') {
  root = '//hq-jdt-dev.zhongan.com'
  login = '/jdt-web/wx/configdata.do'
  test = '//offline-news-api.herokuapp.com/stories'
} else {
  root = 'http://127.0.0.1:8099'
  login = crossOrigin + '/jdt-web/wx/configdata.do'
  test = localOrigin + '/save'
}
export const ILOGIN = root + login
export const ITEST = root + test
