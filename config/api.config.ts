export const apiConfig = {
    baseURL: 'https://api.saucedemo.com',
    endpoints: {
        login: '/api/auth/login',
        products: '/api/products',
        cart: '/api/cart'
    },
    headers: {
        'Content-Type': 'application/json'
    }
}; 