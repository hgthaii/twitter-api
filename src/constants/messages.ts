const USERS_MESSAGES = {
  VALIDATION_ERROR: 'Lỗi xác thực!',
  REGISTER_SUCCESS: 'Đăng ký thành công!',
  EMAIL_ALREADY_EXISTS: 'Email này đã được sử dụng!',
  NAME_MUST_BE_STRING: 'Tên phải là một chuỗi ký tự!',
  NAME_LENGTH_MUST_BE_BETWEEN_1_AND_120: 'Tên phải có độ dài từ 1 đến 120 ký tự!',
  EMAIL_INVALID: 'Email không đúng định dạng! Ví dụ: example@gmail.com',
  PASSWORD_MUST_BE_STRING: 'Mật khẩu phải là một chuỗi ký tự!',
  PASSWORD_LENGTH_MUST_BE_BETWEEN_6_AND_50: 'Mật khẩu phải có độ dài từ 6 đến 50 ký tự!',
  PASSWORD_IS_NOT_STRONG: 'Mật khẩu phải chứa chữ hoa, chữ thường, số và ký tự.',
  PASSWORDS_DO_NOT_MATCH: 'Mật khẩu không khớp!',
  PASSWORD_IS_REQUIRED: 'Mật khẩu không được để trống!',
  CONFIRM_PASSWORD_IS_REQUIRED: 'Xác nhận mật khẩu không được để trống!',
  EMAIL_IS_REQUIRED: 'Email không được để trống!',
  NAME_IS_REQUIRED: 'Tên không được để trống!',
  USER_NOT_FOUND: 'Không tìm thấy người dùng!',
  DATE_OF_BIRTH_IS_REQUIRED: 'Ngày sinh không được để trống!'
} as const

export { USERS_MESSAGES }
