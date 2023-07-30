import { Response } from 'express'

const responseWithData = (res: Response, statusCode: number, data: object) => {
  return res.status(statusCode).json(data)
}

const ok = (res: Response, data: object, message: string) => {
  responseWithData(res, 200, data)
}

const error = (res: Response, message: string) => {
  responseWithData(res, 500, {
    statusCode: 500,
    message
  })
}

const badrequest = (res: Response, message: string, errors: object) => {
  responseWithData(res, 400, {
    statusCode: 400,
    message,
    errors
  })
}

const toomanyrequest = (res: Response, message: string, nextValidRequestTime: Date) => {
  responseWithData(res, 429, {
    statusCode: 429,
    message,
    nextValidRequestTime
  })
}

const created = (res: Response, data: object, message: string) => {
  responseWithData(res, 201, {
    statusCode: 201,
    message,
    data
  })
}

const unauthorize = (res: Response, message: string) => {
  responseWithData(res, 401, {
    statusCode: 401,
    message
  })
}

const notfound = (res: Response, message: string) => {
  responseWithData(res, 404, {
    statusCode: 404,
    message
  })
}

const forbidden = (res: Response, message: string) => {
  responseWithData(res, 403, {
    statusCode: 403,
    message
  })
}

const nocontent = (res: Response, message: string) => {
  responseWithData(res, 204, {
    statusCode: 204,
    message
  })
}

export default {
  ok,
  created,
  nocontent,
  badrequest,
  error,
  toomanyrequest,
  forbidden,
  unauthorize,
  notfound
}
