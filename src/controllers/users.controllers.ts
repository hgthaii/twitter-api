import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import usersService from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { LogoutReqBody, RegisterReqBody } from '~/models/requests/User.requests'
import { ObjectId } from 'mongodb'
import { USERS_MESSAGES } from '~/constants/messages'
import HTTP_STATUS from '~/constants/httpStatus'

const login = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  const user = req.user as User
  const userId = user._id as ObjectId
  const result = await usersService.login(userId.toString())

  return res.status(200).json({
    message: USERS_MESSAGES.LOGIN_SUCCESS,
    data: result
  })
}

const register = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  const result = await usersService.register(req.body)

  return res.status(201).json({
    message: USERS_MESSAGES.REGISTER_SUCCESS,
    data: result
  })
}

const logout = async (req: Request<ParamsDictionary, any, LogoutReqBody>, res: Response) => {
  const { refresh_token } = req.body
  const result = await usersService.logout(refresh_token)
  return res.status(HTTP_STATUS.OK).json(result)
}

export default { register, login, logout }
