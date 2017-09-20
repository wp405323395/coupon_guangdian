
class Header {
  constructor () {
  }

  getHeader () {
    let ua = this._getUa();
    return {
      'userAgent': ua
    }
  }

  _getUa () {
    let ua = 'aaaa'
    return ua
  }
}

export default Header
