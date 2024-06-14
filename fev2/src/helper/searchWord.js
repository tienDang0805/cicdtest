export const addSearchWordToLocalStorage = (text) => {
    // let search = sessionStorage.getItem('search') || ''


    sessionStorage.setItem('search', text)
}


export const removeSearchWordToLocalStorage = () => {
    
    sessionStorage.setItem('search', '')
}

export const getSearchWordFromLocalStorage = () => {
    return sessionStorage.getItem('search')
}