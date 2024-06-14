export const addCartItemToLocalStorage = (productId, price, quantity) => {
    let carts = JSON.parse(sessionStorage.getItem('carts')) || []

    if (!carts.length) {
        carts = [{productId, price, quantity}]
    }
    else {
        const index = carts.findIndex(i => i.productId == productId)

        if (index >= 0) { carts[index].quantity += 1}
        else carts.push({ productId, price, quantity})
    }

    sessionStorage.setItem('carts', JSON.stringify(carts))
}


export const addCartItemToLocalStorage2 = (productId, price, quantity) => {
    let carts = JSON.parse(sessionStorage.getItem('carts')) || []

    if (!carts.length) {
        carts = [{productId, price, quantity}]
    }
    else {
        const index = carts.findIndex(i => i.productId == productId)

        if (index >= 0) { carts[index].quantity += quantity}
        else carts.push({ productId, price, quantity})
    }

    sessionStorage.setItem('carts', JSON.stringify(carts))
}



export const removeCartItemToLocalStorage = (productId) => {
    let carts = JSON.parse(sessionStorage.getItem('carts'))

    let newcarts = carts.filter(item => item.productId != productId)

    
    
    sessionStorage.setItem('carts', JSON.stringify(newcarts))
}

export const getListCartItemsFromLocalStorage = () => {
    return sessionStorage.getItem('carts')
}
