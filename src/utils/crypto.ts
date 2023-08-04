import { createHash } from 'crypto'
import dotenv from 'dotenv'
dotenv.config()

const sha256 = (content: string) => {
  return createHash('sha256').update(content).digest('hex')
}

const hashPassword = (password: string) => {
  return sha256(password + process.env.SECRET_KEY)
}

export { sha256, hashPassword }
