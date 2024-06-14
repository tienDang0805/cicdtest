import HttpService from "./Gateway"

export const getMe = (token) => {
    return HttpService.get('/auth/me', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}