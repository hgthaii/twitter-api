import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import responseHandlers from '~/handlers/response.handlers'
import usersService from '~/services/users.services'

const getUser = async (req: Request, res: Response) => {
  try {
    console.log(req)
  } catch (error) {
    console.log(error)
  }
}

const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const result = await usersService.register({ email, password })

    responseHandlers.created(res, result, 'Đăng ký thành công!')
  } catch (error) {
    console.log(error)
    responseHandlers.error(res, 'Đăng ký thất bại!')
  }
}

export default { getUser, register }
