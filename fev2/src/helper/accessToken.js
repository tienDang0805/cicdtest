export const addAccessTokenToLocalStorage = (accessToken) => {
    sessionStorage.setItem('accessToken', accessToken)
}
export const getAccessTokenFromLocalStorage = () => {
    return sessionStorage.getItem('accessToken')
}


export const removeToken = () => {
    console.log('xoa session nhaaaa')
    return sessionStorage.removeItem('accessToken')
}



export const addUserProfileToLS = (payload) => {
    return sessionStorage.setItem('userProfile',JSON.stringify(payload))
}

export const getUserProfileFromLS = () => {
    return sessionStorage.getItem('userProfile')
}

export const removeUserProfileToLS = (payload) => {
    return sessionStorage.removeItem('userProfile')
}

export const defineUser = (payload) => {
    return sessionStorage.setItem('getMe', JSON.stringify(payload))
}

export const getUser = (payload) => {
    return sessionStorage.getItem('getMe', JSON.stringify(payload))
}


export const addCurPromoToLS = (MAKM) => {
    sessionStorage.setItem('MAKM', MAKM)
}

export const getCurPromoFromLS = () => {
    return sessionStorage.getItem('MAKM')
}