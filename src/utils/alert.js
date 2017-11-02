module.exports = {
  alert(alertContent) {
    window.eventHub.$emit('alert', [true, alertContent]);
  }
}
