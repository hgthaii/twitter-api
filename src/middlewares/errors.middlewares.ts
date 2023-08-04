import { Request, Response, NextFunction } from 'express'
import { omit } from 'lodash'
import HTTP_STATUS from '~/constants/httpStatus'
import { USERS_MESSAGES } from '~/constants/messages'
import { ErrorWithStatus } from '~/models/Errors'

const defaultErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ErrorWithStatus) {
    return res.status(err.statusCode).json(omit(err, 'statusCode'))
  }

  Object.getOwnPropertyNames(err).forEach((key) => {
    return Object.defineProperty(err, key, { enumerable: true })
  })

  return res.status(err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    error: {
      message: omit(err, 'stack') || USERS_MESSAGES.INTERNAL_SERVER_ERROR
    }
  })
}

export { defaultErrorHandler }
