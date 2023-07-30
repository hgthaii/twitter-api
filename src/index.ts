import express from 'express'
import databaseService from '~/services/database.services'
import userRouter from '~/routes/users.routes'

const app = express()
const port = 3000

app.use(express.json())
databaseService.connect()
app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
