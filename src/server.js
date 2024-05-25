/** @format */

// server.js
import('./lib/message.js')
import app from './app.js'
import chalk from 'chalk'

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(chalk.cyan(`Server is running on port ${port}`))
})
