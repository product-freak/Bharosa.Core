import Bootstrapper from './app/bootstrapper'
import { CommonContainer } from './app/common/container'
import * as bodyParser from 'body-parser'
import { InversifyExpressServer } from 'inversify-express-utils'
import errorMiddleware from './app/middlewares/error.middleware'

const cors = require('cors')

Bootstrapper.initialize()


const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// create server
const server = new InversifyExpressServer(CommonContainer)
server.setConfig((app) => {
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  )
  app.use(bodyParser.json())
  app.use(cors(corsOptions))
  app.get('/', (req, res) => {
    res.send({ message: 'Welcome to api!' });
  });
})

server.setErrorConfig((appForErrorConfig) => {
  appForErrorConfig.use(errorMiddleware)
})

const app = server.build()
app.listen(3002)
