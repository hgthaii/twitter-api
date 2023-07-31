import jwt from 'jsonwebtoken'

const signToken = ({
  payload,
  privateKey = process.env.JWT_KEY as string,
  options = {
    algorithm: 'HS256'
  }
}: {
  payload: string | Buffer | object
  privateKey?: string
  options?: jwt.SignOptions
}) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, privateKey, options, (error, token) => {
      if (error) return reject(error)

      resolve(token as string)
    })
  })
}

export { signToken }
