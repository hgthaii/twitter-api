import { Request, Response, NextFunction } from 'express'
import { omit } from 'lodash'
import HTTP_STATUS from '~/constants/httpStatus'

const defaultErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json(omit(err, 'statusCode'))
}

export { defaultErrorHandler }
