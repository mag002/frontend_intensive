import axios from 'axios';

// Authentication 
// login/ logout/ refreshToken

const API_URL = 'https://dummyjson.com/auth'

// Setup interceptors/ setup auth token for each request
axios.interceptors.request.use(
    config => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            config.headers.Authorization = `Bearer ${user.token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)


export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password, expiresInMins: 1 });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
}

export const logout = () => {
    localStorage.removeItem('user');
}

const refreshToken = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await axios.post(`${API_URL}/refresh`, { refreshToken: user.refreshToken, expiresInMins: 1 });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify({
            ...user,
            token: response.data.token,
            refreshToken: response.data.refreshToken
        }))
        return response.data;
    }
    throw new Error("REFRESH TOKEN FAILED")
}

export const fetchProtectedData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_URL}${endpoint}`);
        console.log(response)
        return response.data;
    } catch (err) {
        if (err.response && err.response.status == 401) {
            const data = await refreshToken();// refreshToken;
            const response = await axios.get(`${API_URL}${endpoint}`);
            return response.data
        }
        logout();
        window.location.href = '/login'
        throw err
    }
}

export const fetchUserData = async () => {
    // Fetch (token valid )=> have data
    // Error:
    //      - token expire (401) => refresh token => re-call
    //      - common error
    try {
        const response = await axios.get(`${API_URL}/me`);
        console.log(response)
        return response.data;
    } catch (err) {
        if (err.response && err.response.status == 401) {
            const data = await refreshToken();// refreshToken;
            const response = await axios.get(`${API_URL}/me`);
            return response.data
        }
        logout();
        window.location.href = '/login'
        throw err
    }
}


// 18:06
// Handle refresh token

// Update navbar follow isLoggedinState