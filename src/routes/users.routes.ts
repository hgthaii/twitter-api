import express from 'express'
import usersControllers from '~/controllers/users.controllers'
import usersMiddlewares from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/handlers/handlers'

const router = express.Router()

/**
 * Mô tả: Đăng nhập
 * Path: /api/v1/users/login
 * Method: POST
 * Body: { email: string, password: string }
 */
router.post('/login', usersMiddlewares.loginValidator, wrapRequestHandler(usersControllers.login))

/**
 * Mô tả: Đăng ký
 * Path: /api/v1/users/register
 * Method: POST
 * Body: { email: string, password: string, confirmPassword: string, name: string, date_of_birth: Date }
 */
router.post('/register', usersMiddlewares.registerValidator, wrapRequestHandler(usersControllers.register))

/**
 * Mô tả: Đăng xuất
 * Path: /api/v1/users/logout
 * Method: POST
 * Header: Authorization: Bearer <accessToken>
 * Body: { refreshToken: string }
 */
router.post(
  '/logout',
  usersMiddlewares.accessTokenValidator,
  usersMiddlewares.refreshTokenValidator,
  wrapRequestHandler(usersControllers.logout)
)

/**
 * Mô tả: Xác thực email khi người dùng click vào link
 * Path: /api/v1/users/verify_email
 * Method: POST
 * Body: { email_verify_token: string }
 */
router.post(
  '/verify_email',
  usersMiddlewares.accessTokenValidator,
  usersMiddlewares.refreshTokenValidator
  // wrapRequestHandler(usersControllers.verify_email)
)

export default router
