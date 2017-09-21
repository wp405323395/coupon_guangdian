
class Header {
  constructor () {
  }

  getHeader () {
    let ua = this._getUa();
    return {
      'Content-Type': 'application/json',
      "Access-Token": "kkkk",
       "UserAgent": ua
    }
  }

  _getUa () {
    let ua = 'aaaa'
    return ua
  }
}

export default Header
