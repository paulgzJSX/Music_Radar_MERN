import Axios from 'axios'

const baseUrl = process.env.REACT_APP_SERVER_BASE_URL

export const registerUser = async (email, password) => {
    const res = await Axios.post(`${baseUrl}/register`, { email, password }, { withCredentials: true })
    return res
}

export const updateFavoriteInDb = async (url, field, user, id) => {
    const res = await Axios.post(`${baseUrl}/${url}`, { _id: user, [field]: id }, { withCredentials: true })
    return res
}

export const fetchUser = async () => {
    const { data } = await Axios.get(`${baseUrl}/user`, { withCredentials: true })
    return data
}

export const loginUser = async (email, password) => {
    const res = await Axios.post(`${baseUrl}/login`, { email, password }, { withCredentials: true })
    return res
}

export const logoutUser = async () => {
    const res = await Axios.get(`${baseUrl}/logout`, { withCredentials: true })
    return res
}