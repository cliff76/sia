const {VM} = require('vm2')

module.exports = {
  js: code => {
    const vm = new VM()
    try {
      return vm.run(code).toString()
    } catch (e) {
      return e.toString()
    }
  },
}
