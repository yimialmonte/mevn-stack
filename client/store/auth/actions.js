import client from '@client/utils/axios'

export const POST_REGISTER = 'POST_REGISTER'

export const POST_LOGIN = 'POST_LOGIN'

export const SET_AUTH = 'SET_AUTH'

export const UNSET_AUTH = 'UNSET_AUTH'

export const POST_FORGOT_PASSWORD = 'POST_FORGOT_PASSWORD'

export const POST_RESET_PASSWORD = 'POST_RESET_PASSWORD'

export const POST_CONFIRM_EMAIL = 'POST_CONFIRM_EMAIL'

export default {
  [POST_REGISTER]: (context, data) => client.post('auth/register', data),

  [POST_LOGIN]: (context, data) => client.post('auth/login', data),

  [POST_FORGOT_PASSWORD]: (context, data) =>
    client.post('auth/passwords/email', data),

  [POST_RESET_PASSWORD]: (context, data) =>
    client.post('auth/passwords/reset', data),

  [POST_CONFIRM_EMAIL]: (context, data) =>
    client.post('auth/emails/confirm', data)
}
