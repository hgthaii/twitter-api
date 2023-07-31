import express from 'express'
import authMiddlewares from '~/middlewares/auth.middlewares'
import usersControllers from '~/controllers/users.controllers'
import usersMiddlewares from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/handlers/handlers'

const router = express.Router()

router.get('/', authMiddlewares.auth, usersControllers.getUser)
router.post('/register', usersMiddlewares.registerValidator, wrapRequestHandler(usersControllers.register))

export default router
