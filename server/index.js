import Express from 'express'
import Mongoose from 'mongoose'
import path from 'path'
import config from '@config'
import v1Router from '@routes'
import Webpack from 'webpack'
import WebpackConfig from '../webpack.config'
import WebpackMiddleware from 'webpack-dev-middleware'

Mongoose.connect(config.databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = Express()

const compiler = Webpack(WebpackConfig)
app.use(WebpackMiddleware(compiler))

app.use(v1Router)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(3000, () => {
  console.log('Server started succesfully')
})
