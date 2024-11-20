export const PHONE_RULES = {
  required: 'Số điện thoại bắt buộc nhập',
  pattern: {
    value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
    message: 'Số điện thoại không đúng định dạng',
  },
};
export const PASSWORD_RULES = {
  required: 'Mật khẩu bắt buộc nhập',
  pattern: {
    value: /^(?=.*[a-z])(?=.*[0-9])\S{6,}$/,
    message: 'Mật khẩu không đúng định dạng',
  },
};

export const RE_PASSWORD_RULES = {
  required: 'Xác nhận mật khẩu bắt buộc nhập',
  validate: (value: string, context: any) =>
    value === context.password || 'Mật khẩu không trùng khớp',
};

export const OPT_RULE = {
  required: 'Mã OTP bắt buộc nhập',
};

export const OLD_PASSWORD = {
  required: 'Mật khẩu cũ bắt buộc nhập!',
};

export const NEW_PASSWORD_RULES = {
  required: 'Mật khẩu mới bắt buộc nhập!',
  pattern: {
    value: /^(?=.*[a-z])(?=.*[0-9])\S{6,}$/,
    message: 'Mật khẩu ít nhất 6 kí tự và số, không chứa khoảng trắng.',
  },
};

export const USERNAME = {
  required: 'Tên người dùng là bắt buộc',
  pattern: {
    value: /^[\p{L}\p{M}\p{N}_\s]{5,}$/u,
    message: 'Tên người dùng sai định dạng',
  },
};

export const INTRODUCE_USER = {
  required: 'Giới thiệu là bắt buộc',
};
export const EMAIL_RULES = {
  required: 'Email bắt buộc nhập',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Email không đúng định dạng',
  },
};
