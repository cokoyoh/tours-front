export const api_domain = 'http://localhost:8000/'
export const login_url = api_domain + 'oauth/token'
export const user_url = api_domain + 'api/user'
export const user_list_url = api_domain + 'api/v1/user-list'
export const get_user_conversation_url = api_domain + 'api/v1/get-user-conversation'

export const forgot_password_url = api_domain + 'api/forgot-password'
export const reset_password_url = api_domain + 'api/reset-password'

export   const get_header  = function () {
    const token_date = JSON.parse(window.localStorage.getItem('auth_user'))
    const headers = {
        'Accept' : 'application/json',
        'Authorization': 'Bearer ' +  token_date.access_token,
    }
    return headers
}
