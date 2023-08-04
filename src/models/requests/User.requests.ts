import { JwtPayload } from 'jsonwebtoken'
import { TokenType } from '~/constants/enums'

interface RegisterReqBody {
  name: string
  email: string
  password: string
  comfirm_password: string
  date_of_birth: string
}

interface LogoutReqBody {
  refresh_token: string
}

interface TokenPayload extends JwtPayload {
  user_id: string
  token_type: TokenType
}

export { RegisterReqBody, TokenPayload, LogoutReqBody }
