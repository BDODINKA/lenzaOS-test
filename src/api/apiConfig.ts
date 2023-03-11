import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:
        process.env.NODE_ENV === 'development'
            ? 'https://api.lenzaos.com/test/'
            : 'https://api.lenzaos.com/test/',
    withCredentials: true,
})