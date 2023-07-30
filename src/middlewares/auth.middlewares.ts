import { Request, Response, NextFunction } from 'express'

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req)

    next()
  } catch (error) {
    console.log(error)
  }
}

export default { auth }