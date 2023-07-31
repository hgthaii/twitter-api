import express from 'express'
import databaseService from '~/services/database.services'
import userRouter from '~/routes/users.routes'
import { defaultErrorHandler } from '~/middlewares/errors.middlewares'

databaseService.connect()
const app = express()
const port = 3000

app.use(express.json())
app.use('/users', userRouter)
app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
