const chalk = require('chalk')

// Prints an error message
module.exports = msg => {
  if (msg.message) {
    msg = msg.message
  }
  console.error(`${chalk.red('> Error!')} ${msg}`)
}
