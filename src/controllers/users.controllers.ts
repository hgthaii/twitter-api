import { NextFunction, Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import responseHandlers from '~/handlers/response.handlers'
import usersService from '~/services/users.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/requests/User.requests'

const getUser = async (req: Request, res: Response) => {
  try {
    console.log(req)
  } catch (error) {
    console.log(error)
  }
}

const register = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response, next: NextFunction) => {
  const result = await usersService.register(req.body)

  responseHandlers.created(res, result, 'Đăng ký thành công!')
}

export default { getUser, register }
