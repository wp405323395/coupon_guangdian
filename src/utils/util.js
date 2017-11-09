function formatTime(date) {
  console.log('测试CommonsChunkPlugin');
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute,
    second
  ].map(formatNumber).join(':')
}

function formatDay(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

function textIsNotNull(str) {
  if (str === null || str === undefined || str === '' || str === 'undefined') {
    return false
  }
  return true
}

function textIsNull(str) {
  if (str === null || str === undefined || str === '' || str === 'undefined') {
    return true
  }
  return false
}

function alert(alertContent) {
  window.eventHub.$emit('alert', [true, alertContent]);
}

module.exports = {
  formatTime: formatTime,
  formatLocation: formatLocation,
  textIsNotNull: textIsNotNull,
  formatDay: formatDay,
  textIsNull: textIsNull,
  alert: alert
}
