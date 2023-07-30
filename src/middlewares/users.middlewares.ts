import { checkSchema } from 'express-validator'
import usersService from '~/services/users.services'
import validation from '~/utils/validation'

const registerValidator = validation.validate(
  checkSchema({
    name: {
      notEmpty: {
        errorMessage: 'Tên không được để trống!'
      },
      isString: {
        errorMessage: 'Tên phải là một chuỗi ký tự!'
      },
      isLength: {
        options: {
          min: 1,
          max: 120
        },
        errorMessage: 'Tên phải có độ dài từ 1 đến 120 ký tự!'
      },
      trim: true
    },
    email: {
      notEmpty: {
        errorMessage: 'Email không được để trống!'
      },
      isEmail: true,
      trim: true,
      custom: {
        options: async (value) => {
          const isExistEmail = await usersService.checkEmailExists(value)
          if (isExistEmail) {
            throw new Error('Email này đã được sử dụng!')
          }

          return true
        }
      },
      errorMessage: 'Email không đúng định dạng! Ví dụ: example@gmail.com'
    },
    password: {
      notEmpty: {
        errorMessage: 'Mật khẩu không được để trống!'
      },
      isString: {
        errorMessage: 'Mật khẩu phải là một chuỗi ký tự!'
      },
      isLength: {
        options: {
          min: 6,
          max: 50
        },
        errorMessage: 'Mật khẩu phải có độ dài từ 6 đến 50 ký tự!'
      },
      isStrongPassword: {
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        },
        errorMessage: 'Mật khẩu phải chứa chữ hoa, chữ thường, số và ký tự.'
      }
    },
    confirm_password: {
      notEmpty: {
        errorMessage: 'Xác nhận mật khẩu không được để trống!'
      },
      isString: {
        errorMessage: 'Xác nhận mật khẩu phải là một chuỗi ký tự!'
      },
      custom: {
        options: (value, { req }) => {
          if (value !== req.body.password) {
            throw new Error('Xác nhận mật khẩu chưa trùng khớp với mật khẩu đã nhập!')
          }
          return true
        }
      }
    },
    date_of_birth: {
      isISO8601: {
        options: {
          strict: true,
          strictSeparator: true
        }
      }
    }
  })
)

export default { registerValidator }
